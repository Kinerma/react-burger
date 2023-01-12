import React, {useEffect, useMemo} from "react";
import burgerStyles from './BurgerIngredients.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredient from '../Ingredient/Ingredient'
import { useInView } from 'react-intersection-observer';
import {useSelector} from "react-redux";

export const BurgerIngredients = () => {
    const ingredients = useSelector((state) => state.ingredientsReducer.ingredients);
    const cart = useSelector((state) => state.constructorReducer);

    const [current, setCurrent] = React.useState('bun');
    function onClick(value) {
        setCurrent(value)
        document.querySelector(`#${value}`).scrollIntoView({behavior: "smooth"})
    }

    const [BunRef, inViewBun] = useInView({threshold: 0});
    const [SauceRef, inViewSauce] = useInView({threshold: 0});
    const [MainRef, inViewMain] = useInView({threshold: 0});

    useEffect(() => {
        if (inViewBun) {
            setCurrent('bun');
        } else if (inViewSauce) {
            setCurrent('sauce');
        } else if (inViewMain) {
            setCurrent('main')
        }
    }, [inViewBun, inViewSauce, inViewMain])

    const ingredientsCount = useMemo(() => {
        const ingredientCount = {}
        if (ingredients.length === 0) return ingredientCount
        ingredients.forEach((ingredient) => ingredientCount[ingredient._id] = cart.ingredients.filter(cartElement => cartElement._id === ingredient._id).length)
        // eslint-disable-next-line no-unused-expressions
        cart.bun ? ingredientCount[cart.bun._id] = 1 : null
        return ingredientCount
    }, [ingredients, cart])
    const getCount = (ingredientId) => ingredientsCount[ingredientId]

  return (
    <section className='mt-10'>
      <h1 className='text mb-5 text_type_main-large'>Соберите бургер</h1>
      <div className={burgerStyles.tab}>
        <Tab value='bun' active={current === 'bun'} onClick={onClick}>Булки</Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={onClick}>Соусы</Tab>
        <Tab value='main' active={current === 'main'} onClick={onClick}>Начинки</Tab>
      </div>
      <ul className={`mt-10 ${burgerStyles.ingredients}`}>
        <li id={`bun`} ref={BunRef}>
          <h2 className='mt-10 text text_type_main-medium'>Булки</h2>
          <div className={`${burgerStyles.column}`}>
              {ingredients.filter(item => item.type === 'bun').map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient} getCount={getCount} />)}
          </div>
        </li>
        <li id={`sauce`} ref={SauceRef}>
          <h2 className='mt-10 text text_type_main-medium'>Соусы</h2>
          <div className={`${burgerStyles.column}`}>
              {ingredients.filter(item => item.type === 'sauce').map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient} getCount={getCount} />)}
          </div>
        </li>
        <li id={`main`} ref={MainRef}>
          <h2 className='mt-10 text text_type_main-medium'>Начинки</h2>
          <div className={`${burgerStyles.column}`}>
              {ingredients.filter(item => item.type === 'main').map(ingredient => <Ingredient key={ingredient._id} ingredient={ingredient} getCount={getCount} />)}
          </div>
        </li>
      </ul>
    </section>
  );
};

