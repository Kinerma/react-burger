import {
    WEB_SOCKET_USER_CONNECT,
    WEB_SOCKET_USER_DISCONNECT,
    webSocketUserErrorAction,
    webSocketUserOnMassageAction,
    webSocketUserLinkingAction,
    webSocketUserDetachAction
} from '../actions/webSocketUserActions'

export const webSocketUser = () => {
    return (store) => {
        let socket = null
        return (next) => (action) => {
            const {dispatch} = store
            const {type, payload} = action
            if (type === WEB_SOCKET_USER_CONNECT) {
                socket = new WebSocket(payload)
            }
            if (socket) {
                socket.onopen = (evt) => {
                    dispatch(webSocketUserLinkingAction(evt))
                }
                socket.onclose = (evt) => {
                    dispatch(webSocketUserDetachAction(evt))
                }
                socket.onerror = (evt) => {
                    dispatch(webSocketUserErrorAction(evt))
                }
                socket.onmessage = (evt) => {
                    dispatch(webSocketUserOnMassageAction(JSON.parse(evt.data)))
                }
                if (type === WEB_SOCKET_USER_DISCONNECT && socket.readyState === 1) {
                    socket.close(1000, "the work is completed by default")
                    socket = null
                }
            }
            next(action)
        }
    }
}