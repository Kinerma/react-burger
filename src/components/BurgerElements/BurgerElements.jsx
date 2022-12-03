import React from 'react';
import PropTypes from "prop-types";
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ElementStyles from '../BurgerElements/BurgerElements.module.css'
import {data} from "../../utils/data";


const BurgerElements = ({ingredient}) => {
    const bunList = ingredient.filter(ingredient => ingredient.type === 'bun')
    const sauceList = ingredient.filter(ingredient => ingredient.type === 'sauce')
    const mainList = ingredient.filter(ingredient => ingredient.type === 'main')
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
            <div className={`mt-4 pr-2 ${ElementStyles.element}`}>
              {data.map((ingredient) => {
                if (ingredient.type !== 'bun') {
                  return (
                    <div className={`mb-4 ${ElementStyles.bun}`}>
                      <DragIcon type={"primary"} />
                      <ConstructorElement
                         text={sauceList[0].name}
                         thumbnail={sauceList[0].image}
                         price={sauceList[0].price}
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

export default BurgerElements;