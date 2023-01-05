import React, {useContext, useEffect} from "react";
import burgerStyles from './BurgerIngredients.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredient from '../Ingredient/Ingredient'
import BurgerContext from "../../context/BurgerContext";
import { useInView } from 'react-intersection-observer';


const Tabs =() => {
  const [current, setCurrent] = React.useState('bun');
  function onClick(value) {
      setCurrent(value)
      document.querySelector(`#${value}`).scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className={burgerStyles.tab}>
      <Tab value='bun' active={current === 'bun'} onClick={onClick}>Булки</Tab>
      <Tab value='sauce' active={current === 'sauce'} onClick={onClick}>Соусы</Tab>
      <Tab value='main' active={current === 'main'} onClick={onClick}>Начинки</Tab>
    </div>
  );
};



export const BurgerIngredients = () => {
const {ingredients} = useContext(BurgerContext);



  return (
    <section className='mt-10'>
      <h1 className='text mb-5 text_type_main-large'>Соберите бургер</h1>
      <Tabs />
      <ul className={`mt-10 ${burgerStyles.ingredients}`}>
        <li id={`bun`}>
          <h2 className='mt-10 text text_type_main-medium'>Булки</h2>
          <div className={`${burgerStyles.column}`}>
              {ingredients.filter(item => item.type === 'bun').map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient} />)}
          </div>
        </li>
        <li id={`sauce`}>
          <h2 className='mt-10 text text_type_main-medium'>Соусы</h2>
          <div className={`${burgerStyles.column}`}>
              {ingredients.filter(item => item.type === 'sauce').map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient} />)}
          </div>
        </li>
        <li id={`main`}>
          <h2 className='mt-10 text text_type_main-medium'>Начинки</h2>
          <div className={`${burgerStyles.column}`}>
              {ingredients.filter(item => item.type === 'main').map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient} />)}
          </div>
        </li>
      </ul>
    </section>
  );
};

