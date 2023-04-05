import {OrderActions, TOrderAction} from '../actions/orderActions';
import {IOrderType} from '../../utils/interface'

export interface IInitialState {
    isLoading: boolean;
    isFail: boolean;
    isSuccess: boolean;
    errorMessage: null | string;
    orderNumber: null | IOrderType;
}

const defaultState:IInitialState = {
    isLoading: false,
    isFail: false,
    isSuccess: false,
    errorMessage: null,
    orderNumber: null,
}

export const orderReducer = (state = defaultState, action:TOrderAction):IInitialState => {
    switch (action.type) {
        case OrderActions.CREATE_ORDER_REQUEST:
            return {
                isLoading: true,
                isFail: false,
                isSuccess: false,
                errorMessage: null,
                orderNumber: null
            }
        case OrderActions.CREATE_ORDER_SUCCESS:
            return {
                isLoading: false,
                isFail: false,
                isSuccess: false,
                errorMessage: null,
                orderNumber: action.payload
            }
        case OrderActions.CREATE_ORDER_ERROR:
            return {
                isLoading: false,
                isFail: true,
                isSuccess: false,
                errorMessage: action.payload,
                orderNumber: null
            }
        default:
            return state;
    }
};