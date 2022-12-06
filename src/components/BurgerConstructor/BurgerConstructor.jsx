import React, {useState} from 'react';
import PropTypes from "prop-types";
import constructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerElements from "../BurgerElements/BurgerElements";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {ingredientType} from "../../utils/typesIngredients";




const BurgerConstructor = ({ingredients}) => {
    const [modalState, setModalState] = useState(false)
    function handleOpenModal() {
        setModalState(true)
    }
    function handleCloseModal() {
        setModalState(false)
    }
    return (
        <section className={`mt-25 ml-10`}>
          <BurgerElements ingredients={ingredients} />
          <div className={`mt-10 mr-4 ${constructorStyles.button}`}>
            <div className={`mr-10 ${constructorStyles.column}`}>
              <p className={`text text_type_digits-medium`}>610</p>
              <CurrencyIcon type={"primary"} />
            </div>
            <Button htmlType={"button"} type={"primary"} size={"large"} onClick={handleOpenModal}>
              Оформить заказ
            </Button>
          </div>
          {modalState && <Modal handleModalClose={handleCloseModal}><OrderDetails /></Modal>}
        </section>
    );
};

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerConstructor;
