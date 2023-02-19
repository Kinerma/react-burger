import ingredientStyle from './IngredientDetailsId.module.css'
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import MainPage from "../MainPage/MainPage";
import {useParams, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ingredientsReducer} from "../../services/reducers/ingredientsReducer";
import {useEffect} from "react";
import {ADD_INGREDIENTS_MODAL} from "../../services/actions/modalActions";


export default function IngredientDetailsId() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const ingredientsReducer = useSelector((state) => state.ingredientsReducer)
    const currentIngredient = ingredientsReducer.ingredients.find((item) => item._id === id)
    const location = useLocation()
    useEffect(() => {
            dispatch({type: ADD_INGREDIENTS_MODAL, payload : ingredientsReducer.ingredients.find((item) => item._id === id)})
    }, [ingredientsReducer.isSuccess])

    return (
        location.state?.from === "/"
            ?
            <MainPage />
            :
            ingredientsReducer.isSuccess ?
            (
                currentIngredient && (
                    <div className={ingredientStyle.container}>
                        <IngredientDetails />
                    </div>
                )
            )
                :
                <div></div>
    );
}