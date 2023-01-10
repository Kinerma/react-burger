
import {createOrder, getIngredient} from '../../Api/api'
import {GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_ERROR} from './ingredientsActions';
import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_ERROR} from './orderActions'
import {CONSTRUCTOR_RESET} from './constructorActions'

export const createIngredientsThunk = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENT_REQUEST
        });
        getIngredient()
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

export const createOrderThunk = (data, onCreateCallback) => {
    return function (dispatch) {
        dispatch({
            type: CREATE_ORDER_REQUEST
        });
        createOrder(data)
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

