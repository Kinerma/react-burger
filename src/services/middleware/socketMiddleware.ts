import {Middleware} from "redux";
import {WebSocketOrdersActions, TWebSocketOrdersErrorAction, TWebSocketOrdersOnMassageAction, TWebSocketOrdersLinkingAction, TWebSocketOrdersDetachAction} from '../actions/webSocketOrdersActions'
import {WebSocketUserActions, TWebSocketUserErrorAction, TWebSocketUserOnMassageAction, TWebSocketUserLinkingAction, TWebSocketUserDetachAction} from '../actions/webSocketUserActions'

export interface IWsActions {
    connectStartType: WebSocketOrdersActions.WEB_SOCKET_ORDERS_CONNECT | WebSocketUserActions.WEB_SOCKET_USER_CONNECT
    connectStopType: WebSocketOrdersActions.WEB_SOCKET_ORDERS_DISCONNECT | WebSocketUserActions.WEB_SOCKET_USER_DISCONNECT
    onOpenAction: TWebSocketOrdersLinkingAction | TWebSocketUserLinkingAction
    onCloseAction: TWebSocketOrdersDetachAction | TWebSocketUserDetachAction
    onErrorAction: TWebSocketOrdersErrorAction | TWebSocketUserErrorAction
    onMassageAction: TWebSocketOrdersOnMassageAction | TWebSocketUserOnMassageAction
}

const socketMiddleware = (wsActions:IWsActions):Middleware => store => {
    let socket: WebSocket | null = null;
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === wsActions.connectStartType) {
            socket = new WebSocket(payload)
        }
        if (socket) {
            socket.onopen = event => dispatch(wsActions.onOpenAction(event))
            socket.onclose = event => dispatch(wsActions.onCloseAction(event))
            socket.onerror = event => dispatch(wsActions.onErrorAction(event))
            socket.onmessage = event => dispatch(wsActions.onMassageAction(JSON.parse(event.data)))
            if (type === wsActions.connectStopType && socket.readyState === 1) {
                socket.close(1000, "the work is completed by default")
                socket = null
            }
        }
        next(action)
    }
}

export default socketMiddleware