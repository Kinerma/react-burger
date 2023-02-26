import {
    WEB_SOCKET_ORDERS_CONNECT,
    WEB_SOCKET_ORDERS_DISCONNECT,
    webSocketOrdersErrorAction,
    webSocketOrdersOnMassageAction,
    webSocketOrdersLinkingAction,
    webSocketOrdersDetachAction
} from '../actions/webSocketOrdersActions'

export const webSocketOrders = () => {
    return (store) => {
        let socket = null
        return (next) => (action) => {
            const {dispatch} = store
            const {type, payload} = action
            if (type === WEB_SOCKET_ORDERS_CONNECT) {
                socket = new WebSocket(payload)
            }
            if (socket) {
                socket.onopen = (evt) => {
                    dispatch(webSocketOrdersLinkingAction(evt))
                }
                socket.onclose = (evt) => {
                    dispatch(webSocketOrdersDetachAction(evt))
                }
                socket.onerror = (evt) => {
                    dispatch(webSocketOrdersErrorAction(evt))
                }
                socket.onmessage = (evt) => {
                    dispatch(webSocketOrdersOnMassageAction(JSON.parse(evt.data)))
                }
                if (type === WEB_SOCKET_ORDERS_DISCONNECT && socket.readyState === 1) {
                    socket.close(1000, "the work is completed by default")
                    socket = null
                }
            }
            next(action)
        }
    }
}