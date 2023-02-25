import React, {useState} from 'react';
import constructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerElements from "../BurgerElements/BurgerElements";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {createOrderThunk} from "../../services/actions/createThunk";
import {useDispatch, useSelector} from "react-redux";
import useAuthorization from "../../hooks/useAuthorization";
import {useNavigate} from "react-router-dom";



const BurgerConstructor = () => {
    const [modalState, setModalState] = useState(false)
    const dispatch = useDispatch();
    const ingredients = useSelector((state) => state.constructorReducer);
    const [id, setId] = useState(null)
    const user = useAuthorization()
    const navigate = useNavigate()

    function burgerPrice(ingredients) {
        const bunPrice = ingredients.bun ? ingredients.bun.price * 2 : 0
        const ingredientPrice = ingredients.ingredients.reduce((a,b) => a + b.price, 0)
        return bunPrice + ingredientPrice
    }

    function handleCreateOrder() {
        const newIngredient = ingredients.ingredients.map(ingredient => ingredient._id)
        const Bun = ingredients.bun._id
        if (user.isAuth) {
            dispatch(createOrderThunk([Bun, ...newIngredient, Bun], handleOpenModal))
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
            <Button htmlType={"button"} type={"primary"} size={"large"} onClick={handleCreateOrder} disabled={ingredients.bun ? false : true}>
              Оформить заказ
            </Button>
          </div>
          {modalState && <Modal handleModalClose={handleCloseModal}><OrderDetails id={id} /></Modal>}
        </section>
    );
};


export default BurgerConstructor;
