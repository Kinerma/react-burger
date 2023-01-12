import React from 'react';
import detailsStyles from '../OrderDetails/OrderDetails.module.css'
import {Modal} from '../Modal/Modal'
import Done from '../../images/done.svg'
import {useSelector} from "react-redux";

const OrderDetails = () => {

    const id = useSelector((state) => state.orderReducer.orderNumber)

    return (
        <div className={`pr-25 pl-25  ${detailsStyles.modal}`}>
          <p className={`text text_type_digits-large pt-30`}>{id}</p>
          <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
          <img className={`mt-15`} src={Done} alt={`Иконка подтверждения`} />
          <p className={`text text_type_main-default mt-15`}>Ваш заказ начали готовить</p>
          <p className={`text text_type_main-default text_color_inactive mt-2 mb-30`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
};

export default OrderDetails;
