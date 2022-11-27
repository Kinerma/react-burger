import React, {useCallback, useState} from "react";

import {Tab, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import stylesIngredients from './BurgerIngredients.module.css'

const Tabs =() => {
  const [current, setCurrent] = React.useState('one');
  return (
    <div className={stylesIngredients.tab}>
      <Tab value='one' active={current === 'one'} onClick={setCurrent}>Булки</Tab>
      <Tab value='two' active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
      <Tab value='three' active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
    </div>
  );
};

export const BurgerIngredients = () => {
  return (
    <div className='mt-10'>
      <h1 className='text mb-5 text_type_main-large'>Соберите бургер</h1>
      <Tabs />
      <div className={`mt-10 ${stylesIngredients.ingredients}`}>
        <div>
          <h2 className='text text_type_main-medium'>Булки</h2>
        </div>
        <div>
          <h2 className='text text_type_main-medium'>Соусы</h2>
        </div>
        <div>
          <h2 className='text text_type_main-medium'>Начинки</h2>
        </div>
      </div>
    </div>
  );
};