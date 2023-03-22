import {WebSocketOrdersActions, TWebSocketOrdersAction} from '../actions/webSocketOrdersActions'
import {IOrderType} from "../../utils/interface";

export interface IInitialValue {
    isOpen: boolean,
    isError: boolean,
    isMessage: null | string,
    orders: IOrderType[],
    total: number,
    totalToday: number,
}

const defaultState:IInitialValue = {
    isOpen: false,
    isError: false,
    isMessage: null,
    orders: [],
    total: 0,
    totalToday: 0,
}

export const webSocketOrdersReducer = (state = defaultState, action: TWebSocketOrdersAction) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case WebSocketOrdersActions.WEB_SOCKET_ORDERS_LINKING:
            return {
                ...state,
                isOpen: true,
                isError: false,
                isMessage: null,
            }
        case WebSocketOrdersActions.WEB_SOCKET_ORDERS_DETACH:
            return {
                ...state,
                isOpen: false,
                isError: false,
                isMessage: null,
            }
        case WebSocketOrdersActions.WEB_SOCKET_ORDERS_ERROR:
            return {
                ...state,
                isOpen: false,
                isError: true,
                isMessage: action.payload,
            }
        case WebSocketOrdersActions.WEB_SOCKET_ORDERS_ON_MESSAGE:
            return {
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