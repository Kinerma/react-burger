import React, {useMemo} from "react";
import orderStyles from './OrderInfo.module.css'
import {displayStatus, getData, cardType} from '../../utils/typesIngredients'
import useCountData from '../../hooks/useCountData'
import {useData} from '../../hooks/useData'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import OrderItem from "../OrderItem/OrderItem";

const OrderInfo = ({orderInfo}) => {
    const {getIngredientPrice, getIngredientData} = useData()
    const orderIngredients = useMemo(() => orderInfo.ingredients.map(ingredientId => getIngredientData(ingredientId)),[getIngredientData, orderInfo])
    const {getIngredient} = useCountData(orderIngredients)
    const orderPrice = useMemo(() => orderInfo.ingredients.reduce((prev,ingredientId) => prev + getIngredientPrice(ingredientId),0),[getIngredientPrice,orderInfo])

    return (
        <div className={`${orderStyles.container} pt-15 pb-15`}>
            <p className={`text text_type_digits-default text_color_primary ${orderStyles.number}`}>#{orderInfo.number}</p>
            <p className={`text text_type_main-medium text_color_primary mt-10 ${orderStyles.title}`}>{orderInfo.name}</p>
            <p className={orderInfo.status === "done" ? "text text_type_main-small mt-3 text_color_success" : orderInfo.status === "created" ? "text text_type_main-small mt-3 text_color_primary" : "text text_type_main-small mt-3 text_color_accent"}>{displayStatus(orderInfo.status)}</p>
            <p className={"text text_type_main-medium text_color_primary mt-15"}>Состав:</p>
            <div className={`${orderStyles.ingredients} mt-6 pr-4`}>
                {[...new Set(orderIngredients)].map(ingredient => <OrderItem key={ingredient._id} ingredient={ingredient} count={getIngredient(ingredient._id)}/>)}
            </div>
            <div className={`${orderStyles.info} mt-10`}>
                <p className={"text text_type_main-small text_color_inactive"}>{getData(orderInfo.createdAt)}</p>
                <div className={orderStyles.price}>
                    <p className={"text text_type_digits-default text_color_primary"}>{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
}

OrderInfo.propTypes = {
    orderInfo: cardType.isRequired
}

export default OrderInfo
