import React, {useEffect} from "react";
import appStyles from './App.module.css'
import {AppHeader} from '../AppHeader/AppHeader'
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import {createIngredientsThunk} from "../../services/actions/createThunk";
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    const ingredients = useSelector((state) => state.ingredientsReducer.ingredients);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(createIngredientsThunk())

    }, [])
  return (
    <div className={appStyles.app}>
      <AppHeader/>
        {ingredients.length && <main className={appStyles.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </main>}
    </div>
  );
};

export default App;
