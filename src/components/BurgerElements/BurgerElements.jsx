import React from 'react';
import PropTypes from "prop-types";
import {DragIcon, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ElementStyles from '../BurgerElements/BurgerElements.module.css'


const BurgerElements = ({ingredient}) => {
    const bunList = ingredient.filter(ingredient => ingredient.type === 'bun')
    const sauceList = ingredient.filter(ingredient => ingredient.type === 'sauce')
    const mainList = ingredient.filter(ingredient => ingredient.type === 'main')
    return (
        <div>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bunList[0].name} (верх)`}
                price={bunList[0].price}
                thumbnail={bunList[0].image}
            />
            <div>
              <div>
                <DragIcon type={"primary"} />
                <ConstructorElement
                  text={sauceList[0].name}
                  thumbnail={sauceList[0].image}
                  price={sauceList[0].price}
                />

              </div>
            </div>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bunList[0].name} (низ)`}
                price={bunList[0].price}
                thumbnail={bunList[0].image}
            />
        </div>
    );
};

export default BurgerElements;