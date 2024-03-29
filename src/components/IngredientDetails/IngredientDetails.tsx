import React from 'react';
import detailsStyles from '../IngredientDetails/IngredientDetails.module.css'
import {useSelectors} from "../../hooks/useSelector";


const IngredientDetails = () => {
    const ingredient = useSelectors((state) => state.contentReducer.currentIngredient)

    return (
        ingredient ?
    <div className={`pt-10 pb-15`}>
        <h2 className={`ml-10 mr-10 text text_type_main-large ${detailsStyles.paragraph}`}>Детали ингредиента</h2>
        <div className={`mr-30 ml-30 ${detailsStyles.image}`}>
            <img src={ingredient.image} alt={ingredient.name}/>
        </div>
        <p className={`text text_type_main-medium mt-4 mr-25 ml-25 ${detailsStyles.name}`} children={ingredient.name}/>
        <ul className={`text text_type_main-default text_color_inactive mt-8 mr-25 ml-25 ${detailsStyles.information}`}>
            <li className={`mr-5`}>
                <p>Калории,ккал</p>
                <p className={`text text_type_digits-default ${detailsStyles.text}`} children={ingredient.calories}/>
            </li>
            <li className={`mr-5`}>
                <p>Белки, г</p>
                <p className={`text text_type_digits-default ${detailsStyles.text}`} children={ingredient.proteins}/>
            </li>
            <li className={`mr-5`}>
                <p>Жиры, г</p>
                <p className={`text text_type_digits-default ${detailsStyles.text}`} children={ingredient.fat}/>
            </li>
            <li className={`mr-5`}>
                <p>Углеводы, г</p>
                <p className={`text text_type_digits-default ${detailsStyles.text}`}
                   children={ingredient.carbohydrates}/>
            </li>
        </ul>
    </div>
            :
            <div></div>
    );
};

export default IngredientDetails;
