import {BurgerIngredients} from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import mainStyle from './MainPage.module.css'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";


export default function MainPage() {
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <main className={mainStyle.main}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </main>
            </DndProvider>
        </>
    );
}