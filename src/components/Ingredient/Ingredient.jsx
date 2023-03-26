import React from 'react';
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyle from '../Ingredient/Ingredient.module.css'
import {ingredientType} from "../../utils/typesIngredients";
import {useDrag} from "react-dnd";
import {Link} from "react-router-dom";


const Ingredient = ({ingredient, getCount}) => {


    const [,dragRef] = useDrag({
        type: 'ingredient',
        item:ingredient,
    })

    return (
        <Link className={ingredientStyle.link} to={'/ingredient/'+ingredient._id} state={{from: '/', ingredient: ingredient}}>
            <div className={`ml-4 mr-2 mt-6 mb-8 ${ingredientStyle.ingredient}`} ref={dragRef}>
                <img src={ingredient.image} alt={ingredient.name} className={`pl-4 pr-4`} />
                <Counter count={getCount(ingredient._id)} />
                <div className={`p-1 ${ingredientStyle.price}`}>
                    <p className={`text text_type_digits-default`}>{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-default ${ingredientStyle.name}`}>{ingredient.name}</p>
            </div>
        </Link>
    );
};

Ingredient.propTypes = {
    ingredient: ingredientType.isRequired
}

export default Ingredient;
