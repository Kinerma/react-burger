import React from 'react';
import PropTypes from "prop-types";
import ConstructorStyles from '../BurgerConstructor/BurgerConstructor.module.css'
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerElements from "../BurgerElements/BurgerElements";
import {data} from "../../utils/data";
import Ingredient from "../Ingredient/Ingredient";


const BurgerConstructor = () => {
    return (
        <section className={`mt-25`}>
          <BurgerElements ingredient={data} />
          <div className={`${ConstructorStyles.button}`}>
            <div className={`${ConstructorStyles.column}`}>
              <p className={`${ConstructorStyles.text}`}>610</p>
              <CurrencyIcon type={"primary"} />
            </div>
            <Button type={"primary"} size={"large"}>
              Оформить заказ
            </Button>
          </div>
        </section>
    );
};

export default BurgerConstructor;