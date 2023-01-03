import {checkResponse} from "../../utils/typesIngredients";
import {BASE_URL_INGREDIENTS, BASE_URL_ORDERS} from '../../Api/api'
import {GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_ERROR} from './ingredientsActions';
import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_ERROR} from './orderActions'
import {CONSTRUCTOR_RESET} from './constructorActions'

export const createIngredientsThunk = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENT_REQUEST
        });
        fetch(BASE_URL_INGREDIENTS)
            .then((res) => checkResponse(res))
            .then((res) => {
                if (res) {
                    dispatch({
                        type: GET_INGREDIENT_SUCCESS,
                        payload: res.data,
                    })
                }
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
        fetch(BASE_URL_ORDERS, {
            method: 'POST',
            headers: {"Content-type": 'application/json'},
            body: JSON.stringify(data)
        })
            .then((res) => checkResponse(res))
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: CREATE_ORDER_SUCCESS,
                        payload: res.order
                    })
                    onCreateCallback(res.order.number)
                    dispatch({
                        type: CONSTRUCTOR_RESET
                    })
                }
            })
            .catch(() => {
                dispatch({
                    type: CREATE_ORDER_ERROR
                })
            })
    }
}

