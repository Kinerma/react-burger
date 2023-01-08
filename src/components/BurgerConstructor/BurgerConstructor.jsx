import React, {useState} from 'react';
import constructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerElements from "../BurgerElements/BurgerElements";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {createOrderThunk} from "../../services/actions/createThunk";
import {useDispatch, useSelector} from "react-redux";


const BurgerConstructor = () => {
    const [modalState, setModalState] = useState(false)
    const dispatch = useDispatch();
    const ingredients = useSelector((state) => state.ingredientsReducer.ingredients);
    const [id, setId] = useState(null)

    function burgerPrice(ingredients) {
        const bunPrice = ingredients.filter((ingredient) =>ingredient.type === 'bun')[0].price * 2
        const ingredientPrice = ingredients.filter((ingredient) =>ingredient.type !== 'bun').reduce((a,b) => a + b.price, 0)
        return bunPrice + ingredientPrice
    };

    function handleCreateOrder() {
        const newIngredient = ingredients.filter(item => item.type !== 'bun').map(ingredient => ingredient._id)
        const Bun = ingredients.filter(item => item.type === 'bun')[0]._id
        dispatch(createOrderThunk([Bun, ...newIngredient], handleOpenModal))
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
            <Button htmlType={"button"} type={"primary"} size={"large"} onClick={handleCreateOrder}>
              Оформить заказ
            </Button>
          </div>
          {modalState && <Modal handleModalClose={handleCloseModal}><OrderDetails id={id} /></Modal>}
        </section>
    );
};


export default BurgerConstructor;
