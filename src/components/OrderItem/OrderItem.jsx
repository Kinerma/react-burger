import React from "react";
import itemStyles from './OrderItem.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/typesIngredients";

const OrderItem = ({ingredient,count}) => {
    return (
        <div>
            <div>
                <img src={ingredient.img} alt="Ингредиент" />
            </div>
            <p>{ingredient.name}</p>
            <p>{count} x {ingredient.price}</p>
            <CurrencyIcon type="primary" />
        </div>
    );
}

OrderItem.propTypes = {
    ingredient: ingredientType.isRequired,
    count: PropTypes.number.isRequired
}

export default OrderItem