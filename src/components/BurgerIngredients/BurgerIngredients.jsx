import React from "react";
import PropTypes from "prop-types";
import BurgerStyles from './BurgerIngredients.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredient from '../Ingredient/Ingredient'
import {data} from '../../utils/data'
import ingredient from "../Ingredient/Ingredient";



const Tabs =() => {
  const [current, setCurrent] = React.useState('one');
  return (
    <div className={BurgerStyles.tab}>
      <Tab value='bun' active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
      <Tab value='sauce' active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
      <Tab value='main' active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
    </div>
  );
};


export const BurgerIngredients = () => {


  return (
    <section className='mt-10'>
      <h1 className='text mb-5 text_type_main-large'>Соберите бургер</h1>
      <Tabs />
      <div className={`mt-10 ${BurgerStyles.ingredients}`}>
        <div>
          <h2 className='mt-10 text text_type_main-medium'>Булки</h2>
          <div className={`${BurgerStyles.column}`}>
              {data.filter(item => item.type === 'bun').map(ingredient => <Ingredient ingredient={ingredient} />)}
          </div>
        </div>
        <div>
          <h2 className='mt-10 text text_type_main-medium'>Соусы</h2>
          <div className={`${BurgerStyles.column}`}>
              {data.filter(item => item.type === 'sauce').map(ingredient => <Ingredient ingredient={ingredient} />)}
          </div>
        </div>
        <div>
          <h2 className='mt-10 text text_type_main-medium'>Начинки</h2>
          <div className={`${BurgerStyles.column}`}>
              {data.filter(item => item.type === 'main').map(ingredient => <Ingredient ingredient={ingredient} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

