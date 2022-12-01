import React from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/appHeader'
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'





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