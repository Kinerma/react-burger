import {IIngredient} from '../../utils/interface';

export enum IngredientsActions {
    GET_INGREDIENT_REQUEST = 'GET_INGREDIENT_REQUEST',
    GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS',
    GET_INGREDIENT_ERROR = 'GET_INGREDIENT_ERROR',
}

export type TIngredientsAction = IGetIngredientRequest | IGetIngredientSuccess | IGetIngredientError

interface IGetIngredientRequest {
    type: IngredientsActions.GET_INGREDIENT_REQUEST
}
interface IGetIngredientSuccess {
    type: IngredientsActions.GET_INGREDIENT_SUCCESS;
    payload: IIngredient[];
}
interface IGetIngredientError {
    type: IngredientsActions.GET_INGREDIENT_ERROR
}

export const getIngredientRequest = ():TIngredientsAction => ({type: IngredientsActions.GET_INGREDIENT_REQUEST})
export const getIngredientSuccess = (ingredients:IIngredient[]):TIngredientsAction => ({type: IngredientsActions.GET_INGREDIENT_SUCCESS, payload: ingredients})
export const getIngredientError = ():TIngredientsAction => ({type: IngredientsActions.GET_INGREDIENT_ERROR})