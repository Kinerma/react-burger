import React, {FC} from "react";
import itemStyles from './OrderItem.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IIngredient} from '../../utils/interface'

interface IProps {
    ingredient: IIngredient;
    count: number;
}

const OrderItem:FC<IProps> = ({ingredient,count}) => {
    return (
        <div className={itemStyles.container}>
            <div className={itemStyles.imageContainer}>
                <img className={itemStyles.image} src={ingredient.image} alt="Ингредиент" />
            </div>
            <p className={`text text_type_main-default text_color_primary ml-4 ${itemStyles.title}`}>{ingredient.name}</p>
            <p className={`text text_type_digits-default text_color_primary ml-4 ${itemStyles.price}`}>{count} x {ingredient.price}</p>
            <CurrencyIcon type="primary" />
        </div>
    );
}

export default OrderItem
