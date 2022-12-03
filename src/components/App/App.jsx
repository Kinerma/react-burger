import React, {useState} from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/appHeader'
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {data} from "../../utils/data";






function App() {

  return (
    <div className={appStyles.app}>
      <AppHeader/>
      <main className={appStyles.main}>
          <BurgerIngredients/>
          <BurgerConstructor/>
      </main>
    </div>
  );
};

export default App;