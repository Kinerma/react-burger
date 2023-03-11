import {
    WEB_SOCKET_USER_LINKING,
    WEB_SOCKET_USER_DETACH,
    WEB_SOCKET_USER_ERROR,
    WEB_SOCKET_USER_ON_MESSAGE
} from '../actions/webSocketUserActions'

const initialValue = {
    isOpen: false,
    isError: false,
    isMessage: null,
    orders: [],
}

export const webSocketUserReducer = (state = initialValue, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case WEB_SOCKET_USER_LINKING:
            return {
                ...state,
                isOpen: true,
                isError: false,
                isMessage: null,
            }
        case WEB_SOCKET_USER_DETACH:
            return {
                ...state,
                isOpen: false,
                isError: false,
                isMessage: null,
            }
        case WEB_SOCKET_USER_ERROR:
            return {
                ...state,
                isOpen: false,
                isError: true,
                isMessage: action.payload,
            }
        case WEB_SOCKET_USER_ON_MESSAGE:
            return {
                ...state,
                isOpen: true,
                isError: false,
                isMessage: null,
                orders: action.payload.orders.reverse(),
            }
        default:
            return state
    }
}