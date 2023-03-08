import React, {useMemo} from "react";
import orderStyles from './OrderInfo.module.css'
import {ingredientType, displayStatus, getData} from '../../utils/typesIngredients'
import useCountData from '../../hooks/useCountData'
import {useData} from '../../hooks/useData'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import OrderItem from "../OrderItem/OrderItem";

const OrderInfo = ({orderInfo}) => {
    const {getIngredientPrice, getIngredientData} = useData()
    const orderIngredients = useMemo(() => orderInfo.ingredients.map(ingredientId => getIngredientData(ingredientId)),[getIngredientData, orderInfo])
    const {getIngredientCount} = useCountData(orderIngredients)
    const orderPrice = useMemo(() => orderInfo.ingredients.reduce((prev,ingredientId) => prev + getIngredientPrice(ingredientId),0),[getIngredientPrice,orderInfo])

    return (
        <div>
            <p>{orderInfo.number}</p>
            <p>{orderInfo.name}</p>
            <p>{displayStatus(orderInfo.status)}</p>
            <p>Состав:</p>
            <div>
                {[...new Set(orderIngredients)].map(ingredient => <OrderItem key={ingredient._id} ingredient={ingredient} count={getIngredientCount(ingredient._id)}/>)}
            </div>
            <div>
                <p>{getData(orderInfo.createdAt)}</p>
                <div>
                    <p>{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
}

OrderInfo.propTypes = {
    orderInfo: ingredientType.isRequired
}

export default OrderInfo
