import {
    WEB_SOCKET_ORDERS_LINKING,
    WEB_SOCKET_ORDERS_DETACH,
    WEB_SOCKET_ORDERS_ERROR,
    WEB_SOCKET_ORDERS_ON_MESSAGE
} from '../actions/webSocketOrdersActions'

const initialValue = {
    isOpen: false,
    isError: false,
    isMessage: null,
    orders: [],
    total: 0,
    totalToday: 0,
}

export const webSocketOrdersReducer = (state = initialValue, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case WEB_SOCKET_ORDERS_LINKING:
            return {
                ...state,
                isOpen: true,
                isError: false,
                isMessage: null,
            }
        case WEB_SOCKET_ORDERS_DETACH:
            return {
                ...state,
                isOpen: false,
                isError: false,
                isMessage: null,
            }
        case WEB_SOCKET_ORDERS_ERROR:
            return {
                ...state,
                isOpen: false,
                isError: true,
                isMessage: action.payload,
            }
        case WEB_SOCKET_ORDERS_ON_MESSAGE:
            return {
                ...state,
                isOpen: true,
                isError: false,
                isMessage: null,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            }
        default:
            return state
    }
}