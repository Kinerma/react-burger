export const createWSActions = (onErrorAction, onOpenAction, connectStartType, onCloseAction, onMassageAction, connectStopType) => ({
    onError: onErrorAction,
    connectStart: connectStartType,
    onClose: onCloseAction,
    onMassage: onMassageAction,
    connectStop: connectStopType,
    onOpen: onOpenAction,
})

const socketMiddleware = (wsActions) => store => {
    let socket = null
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === wsActions.connectStart) {
            socket = new WebSocket(payload)
        }
        if (socket) {
            socket.onopen = event => dispatch(wsActions.onOpen(event))
            socket.onclose = event => dispatch(wsActions.onClose(event))
            socket.onerror = event => dispatch(wsActions.onError(event))
            socket.onmessage = event => dispatch(wsActions.onMassage(JSON.parse(event.data)))
            if (type === wsActions.connectStop && socket.readyState === 1) {
                socket.close(1000, "the work is completed by default")
                socket = null
            }
        }
        next(action)
    }
}

export default socketMiddleware