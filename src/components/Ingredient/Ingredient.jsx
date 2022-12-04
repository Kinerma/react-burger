import React, {useState} from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyle from '../Ingredient/Ingredient.module.css'
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {ingredientType} from "../../utils/typesIngredients";


const Ingredient = ({ingredient}) => {
    const [modalState, setModalState] = useState(false)
    function handleOpenModal() {
      setModalState(true)
    }
    function handleCloseModal() {
        setModalState(false)
    }
    return (
      <div className={`ml-4 mr-2 mt-6 mb-8 ${ingredientStyle.ingredient}`}>
          <img src={ingredient.image} alt="" className={`pl-4 pr-4 ${ingredientStyle.image}`} onClick={handleOpenModal} />
          <div className={`p-1 ${ingredientStyle.price}`}>
              <p className={`text text_type_digits-default`}>{ingredient.price}</p>
              <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${ingredientStyle.name}`}>{ingredient.name}</p>
          {modalState && <Modal handleModalClose={handleCloseModal}><IngredientDetails ingredient={ingredient} /></Modal>}
     </div>
    );
};

Ingredient.propTypes = {
    ingredient: ingredientType.isRequired
}

export default Ingredient;