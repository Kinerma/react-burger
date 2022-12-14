import React from 'react';
import PropTypes from "prop-types";
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import elementStyles from '../BurgerElements/BurgerElements.module.css'
import {ingredientType} from "../../utils/typesIngredients";


const BurgerElements = ({ingredients}) => {
    const bunList = ingredients.filter(ingredient => ingredient.type === 'bun')

    return (
        <div className={`ml-4`}>
            <div className={`pl-8`}>
              <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${bunList[0].name} (верх)`}
                  price={bunList[0].price}
                  thumbnail={bunList[0].image}
              />
            </div>
            <div className={`mt-4 pr-2 ${elementStyles.element}`}>
              {ingredients.map((ingredient) => {
                if (ingredient.type !== 'bun') {
                  return (
                    <div className={`mb-4 ${elementStyles.bun}`}  key={ingredient._id}>
                      <DragIcon type={"primary"} />
                      <ConstructorElement
                         text={ingredient.name}
                         thumbnail={ingredient.image}
                         price={ingredient.price}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className={`pl-8`}>
              <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bunList[0].name} (низ)`}
                  price={bunList[0].price}
                  thumbnail={bunList[0].image}
              />
            </div>
        </div>
    );
};

BurgerElements.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired
}

export default BurgerElements;
