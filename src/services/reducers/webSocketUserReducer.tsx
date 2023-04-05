import {TWebSocketUserAction, WebSocketUserActions} from '../actions/webSocketUserActions'
import {IOrderType} from "../../utils/interface";

interface IInitialValue {
    orders: IOrderType[];
    isOpen: boolean;
    isError: boolean;
    isMessage: null | string;
}

const defaultState:IInitialValue = {
    isOpen: false,
    isError: false,
    isMessage: null,
    orders: [],
}

export const webSocketUserReducer = (state = defaultState, action: TWebSocketUserAction):IInitialValue => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case WebSocketUserActions.WEB_SOCKET_USER_LINKING:
            return {
                ...state,
                isOpen: true,
                isError: false,
                isMessage: null,
            }
        case WebSocketUserActions.WEB_SOCKET_USER_DETACH:
            return {
                ...state,
                isOpen: false,
                isError: false,
                isMessage: null,
            }
        case WebSocketUserActions.WEB_SOCKET_USER_ERROR:
            return {
                ...state,
                isOpen: false,
                isError: true,
                isMessage: action.payload,
            }
        case WebSocketUserActions.WEB_SOCKET_USER_ON_MESSAGE:
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