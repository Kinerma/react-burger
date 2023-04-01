import React, {useState} from 'react';
import constructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerElements from "../BurgerElements/BurgerElements";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {createOrderThunk} from "../../services/actions/createThunk";
import useAuthorization from "../../hooks/useAuthorization";
import {useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {useSelectors} from "../../hooks/useSelector";
import {IConstructorState} from "../../services/reducers/constructorReducer";


const BurgerConstructor = () => {
    const [modalState, setModalState] = useState(false)
    const dispatch = useAppDispatch();
    const order = useSelectors(state => state.orderReducer.orderNumber)
    const ingredients = useSelectors((state) => state.constructorReducer);
    const user = useAuthorization()
    const navigate = useNavigate()
    const token = useToken

    function burgerPrice(ingredients: IConstructorState) {
        if (!ingredients.items.length) return 0
        const bunPrice = ingredients.bun ? ingredients.bun.price * 2 : 0
        const ingredientPrice = ingredients.items.reduce((a,b) => a + b.price, 0)
        return bunPrice + ingredientPrice
    }

    function handleCreateOrder() {

        if (user.isAuth && ingredients.bun) {
            dispatch(createOrderThunk(ingredients, handleOpenModal, token.getToken()))
        }
        else {
            navigate('/login')
        }
    }
    function handleOpenModal() {
        setModalState(true)
    }
    function handleCloseModal() {
        setModalState(false)
    }

    return (
        <section className={`mt-25 ml-10`}>
            <BurgerElements />
            <div className={`mt-10 mr-4 ${constructorStyles.button}`}>
            <div className={`mr-10 ${constructorStyles.column}`}>
              <p className={`text text_type_digits-medium`}>{burgerPrice(ingredients)}</p>
              <CurrencyIcon type={"primary"} />
            </div>
            <Button htmlType={"button"} type={"primary"} size={"large"} onClick={handleCreateOrder} disabled={!ingredients.bun}>
              Оформить заказ
            </Button>
          </div>
          {modalState && order && <Modal handleModalClose={handleCloseModal}><OrderDetails id={order.number} /></Modal>}
        </section>
    );
};


export default BurgerConstructor;
