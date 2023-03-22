import {IngredientsActions, TIngredientsAction} from '../actions/ingredientsActions';
import {IIngredient} from "../../utils/interface";

export interface IInitialState {
    ingredients: IIngredient[],
    isLoading: boolean,
    isFail: boolean,
    isSuccess: boolean
}

const defaultState:IInitialState = {
    ingredients: [],
    isLoading: false,
    isFail: false,
    isSuccess: false
}

export const ingredientsReducer = (state = defaultState, action: TIngredientsAction):IInitialState => {
    switch (action.type) {
        case IngredientsActions.GET_INGREDIENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isFail: false,
                isSuccess: false
            }
        case IngredientsActions.GET_INGREDIENT_SUCCESS:
            return {
                ingredients: action.payload,
                isLoading: false,
                isFail: false,
                isSuccess: true
            }
        case IngredientsActions.GET_INGREDIENT_ERROR:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                isSuccess: false
            }
        default:
            return state;
    }
};