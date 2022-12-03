import React, {useState} from 'react';
import PropTypes from "prop-types";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyle from '../Ingredient/Ingredient.module.css'
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const Ingredient = ({ingredient}) => {
    const [modalState, setModalState] = useState(false)
    function handleOpenModal() {
      setModalState(true)
    }
    function handleCloseModal() {
        setModalState(false)
    }
    return (
      <div className={`ml-4 mr-2 mt-6 mb-8 ${IngredientStyle.ingredient}`}>
          <img src={ingredient.image} alt="" className={`pl-4 pr-4 ${IngredientStyle.image}`} onClick={handleOpenModal} />
          <div className={`p-1 ${IngredientStyle.price}`}>
              <p className={`text text_type_digits-default`}>{ingredient.price}</p>
              <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${IngredientStyle.name}`}>{ingredient.name}</p>
          {modalState && <Modal handleModalClose={handleCloseModal}><IngredientDetails ingredient={ingredient} /></Modal>}
     </div>
    );
};

export default Ingredient;