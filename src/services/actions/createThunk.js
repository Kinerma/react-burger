
import Api from '../../Api/api'
import {GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_ERROR} from './ingredientsActions';
import {createOrderRequest, createOrderSuccess, createOrderError, TOrderAction} from './orderActions'
import {CONSTRUCTOR_RESET} from './constructorActions'
import {assignUser, failLoadingUser, startLoadingUser} from "./userActions";
import useController from "../../hooks/useController";

export const createIngredientsThunk = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENT_REQUEST
        });
        Api.getIngredient()
            .then((res) => {
                    dispatch({
                        type: GET_INGREDIENT_SUCCESS,
                        payload: res.data,
                    })
            })
            .catch(() => {
                dispatch({
                    type: GET_INGREDIENT_ERROR
                })
            })
    }
}

export const createOrderThunk = (data, onCreateCallback, token) => {
    return function (dispatch) {
        dispatch({
            type: CREATE_ORDER_REQUEST
        });
        Api.createOrder(data, token)
            .then((res) => {
                    dispatch({
                        type: CREATE_ORDER_SUCCESS,
                        payload: res.order.number
                    })
                    onCreateCallback()
                    dispatch({
                        type: CONSTRUCTOR_RESET
                    })
            })
            .catch(() => {
                dispatch({
                    type: CREATE_ORDER_ERROR
                })
            })
    }
}

export const checkUserAuthThunk = () => (dispatch) => {
    const userController = useController()
    dispatch(startLoadingUser())
    userController.checkAuthorization()
        .then(user => dispatch(assignUser(user)))
        .catch(error => dispatch(failLoadingUser(error.message)))
}

