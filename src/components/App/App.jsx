import React, {useEffect, useState} from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/AppHeader'
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import {getIngredient} from '../../Api/api'
import BurgerContext from "../../context/BurgerContext";

function App() {
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
      getIngredient()
          .then(data => setIngredients(data.data))
          .catch(error => console.log(error))
    }, [])
  return (
    <div className={appStyles.app}>
      <AppHeader/>
        {ingredients.length && <main className={appStyles.main}>
          <BurgerContext.Provider value={{ingredients}}>
              <BurgerIngredients />
              <BurgerConstructor />
          </BurgerContext.Provider>
        </main>}
    </div>
  );
};

export default App;
