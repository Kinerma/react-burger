import ingredientStyle from './IngredientDetailsId.module.css'
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useParams, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {ModalActions} from "../../services/actions/modalActions";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {useSelectors} from "../../hooks/useSelector";


export default function IngredientDetailsId() {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const ingredientsReducer = useSelectors((state) => state.ingredientsReducer)
    const currentIngredient = ingredientsReducer.ingredients.find((item) => item._id === id)
    const location = useLocation()
    useEffect(() => {
            dispatch({type: ModalActions.ADD_INGREDIENTS_MODAL, payload : ingredientsReducer.ingredients.find((item) => item._id === id)})
    }, [ingredientsReducer.isSuccess])

    return (
            ingredientsReducer.isSuccess && currentIngredient ?
            (
                  (
                    <div className={ingredientStyle.container}>
                        <IngredientDetails />
                    </div>
                )
            )
                :
                <div></div>
    );
}