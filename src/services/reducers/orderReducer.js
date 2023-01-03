import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_ERROR} from '../actions/orderActions';

const initialState = {
    orderNumber: null,
    isLoading: false,
    isFail: false
};

export const orderReduce = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isFail: false
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orderNumber: action.payload,
                isFail: false
            }
        case CREATE_ORDER_ERROR:
            return {
                ...state,
                isLoading: false,
                isFail: true
            }
        default:
            return state;
    };
};