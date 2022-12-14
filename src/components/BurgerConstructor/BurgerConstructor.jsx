import React, {useContext, useState} from 'react';
import constructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerElements from "../BurgerElements/BurgerElements";
import Modal from "../Modal/Modal";
import {createOrder} from "../../Api/api";
import OrderDetails from "../OrderDetails/OrderDetails";
import BurgerContext from "../../context/BurgerContext";


const BurgerConstructor = () => {
    const [modalState, setModalState] = useState(false)
    const {ingredients} = useContext(BurgerContext)
    const [id, setId] = useState(null)

    function handleCreateOrder() {
        const newIngredient = ingredients.filter(item => item.type !== 'bun').map(ingredient => ingredient._id)
        const Bun = ingredients.filter(item => item.type === 'bun')[0]._id
        createOrder([Bun, ...newIngredient]).then(data => setId(data.order.number)).then(() => {handleOpenModal()});
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
              <p className={`text text_type_digits-medium`}>610</p>
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
