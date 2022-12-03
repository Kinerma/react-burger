import React, {useState} from 'react';
import PropTypes from "prop-types";
import ConstructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerElements from "../BurgerElements/BurgerElements";
import {data} from "../../utils/data";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";



const BurgerConstructor = () => {
    const [modalState, setModalState] = useState(false)
    function handleOpenModal() {
        setModalState(true)
    }
    function handleCloseModal() {
        setModalState(false)
    }
    return (
        <section className={`mt-25 ml-10`}>
          <BurgerElements ingredient={data} />
          <div className={`mt-10 mr-4 ${ConstructorStyles.button}`}>
            <div className={`mr-10 ${ConstructorStyles.column}`}>
              <p className={`text text_type_digits-medium`}>610</p>
              <CurrencyIcon type={"primary"} />
            </div>
            <Button type={"primary"} size={"large"} onClick={handleOpenModal}>
              Оформить заказ
            </Button>
          </div>
          {modalState && <Modal handleModalClose={handleCloseModal}><OrderDetails /></Modal>}
        </section>
    );
};

export default BurgerConstructor;