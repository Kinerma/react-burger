import React, {FC} from 'react';
import detailsStyles from '../OrderDetails/OrderDetails.module.css'
import Done from '../../images/done.svg'
import {IOrderType} from '../../utils/interface'

interface IProps {
    id: IOrderType['number']
}

const OrderDetails:FC<IProps> = ({id}) => {

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
