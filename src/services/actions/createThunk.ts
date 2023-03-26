import Api from '../../Api/api'
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {RootState} from "../store";
import {TIngredientsAction, getIngredientRequest, getIngredientSuccess, getIngredientError} from './ingredientsActions';
import {TOrderAction, createOrderRequest, createOrderSuccess, createOrderError} from './orderActions'
import {TConstructorAction, addIngredient, constructorBun} from './constructorActions'
import {IConstructorState} from '../reducers/constructorReducer'
import {TUserAction, failLoadingUser, startLoadingUser, completedDownloadUser} from "./userActions";
import useController from "../../hooks/useController";

export type TThunk<actions extends Action,args = any> = ThunkAction<void, RootState, args, actions>

export const createIngredientsThunk = ():TThunk<TIngredientsAction> => (dispatch) => {
    dispatch(getIngredientRequest())
    Api.getIngredient()
        .then(data => dispatch(getIngredientSuccess(data.data)))
        .catch(() => dispatch(getIngredientError()))
}

export const createOrderThunk = (cart: IConstructorState, handleOpenModal: () => void, token: string) : TThunk<TOrderAction | TConstructorAction> => (dispatch) => {
    const cartItemId = cart.bun ? [cart.bun._id, ...cart.items.map(item => item._id), cart.bun._id] : []
    dispatch(createOrderRequest())
    Api.createOrder(cartItemId, token)
        .then(data => {
            dispatch(createOrderSuccess(data.orderNumber))
            dispatch(constructorBun(null))
            dispatch(addIngredient([]))
        })
        .then(() => handleOpenModal())
        .catch((error) => dispatch(createOrderError(error)))
}

export const checkUserAuthThunk = ():TThunk<TUserAction> => (dispatch) => {
    const userController = useController()
    dispatch(startLoadingUser())
    userController.checkAuthorization()
        .then(user => dispatch(completedDownloadUser(user)))
        .catch(error => dispatch(failLoadingUser(error.message)))
}

