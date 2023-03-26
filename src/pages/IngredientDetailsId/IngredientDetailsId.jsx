import ingredientStyle from './IngredientDetailsId.module.css'
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useParams, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {ModalActions} from "../../services/actions/modalActions";


export default function IngredientDetailsId() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const ingredientsReducer = useSelector((state) => state.ingredientsReducer)
    const currentIngredient = ingredientsReducer.ingredients.find((item) => item._id === id)
    const location = useLocation()
    useEffect(() => {
            dispatch({type: ModalActions.ADD_INGREDIENTS_MODAL, payload : ingredientsReducer.ingredients.find((item) => item._id === id)})
    }, [ingredientsReducer.isSuccess])

    return (
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