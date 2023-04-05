export enum WebSocketOrdersActions {
    WEB_SOCKET_ORDERS_CONNECT = 'WEB_SOCKET_ORDERS_CONNECT',
    WEB_SOCKET_ORDERS_DISCONNECT = 'WEB_SOCKET_ORDERS_DISCONNECT',
    WEB_SOCKET_ORDERS_ERROR = 'WEB_SOCKET_ORDERS_ERROR',
    WEB_SOCKET_ORDERS_ON_MESSAGE = 'WEB_SOCKET_ORDERS_ON_MESSAGE',
    WEB_SOCKET_ORDERS_LINKING = 'WEB_SOCKET_ORDERS_LINKING',
    WEB_SOCKET_ORDERS_DETACH = 'WEB_SOCKET_ORDERS_DETACH',
}

export type TWebSocketOrdersAction = IWebSocketOrdersConnectAction | IWebSocketOrdersDisconnectAction | IWebSocketOrdersErrorAction | IWebSocketOrdersOnMassageAction | IWebSocketOrdersLinkingAction | IWebSocketOrdersDetachAction

interface IWebSocketOrdersConnectAction {
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_CONNECT
    payload: string
}
interface IWebSocketOrdersDisconnectAction {
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_DISCONNECT
}
interface IWebSocketOrdersErrorAction {
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_ERROR
    payload: any
}
interface IWebSocketOrdersOnMassageAction {
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_ON_MESSAGE
    payload: any
}
interface IWebSocketOrdersLinkingAction {
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_LINKING
    payload: any
}
interface IWebSocketOrdersDetachAction {
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_DETACH
    payload: any
}

export type TWebSocketOrdersConnectAction = (url: string) => TWebSocketOrdersAction
export type TWebSocketOrdersDisconnectAction = () => TWebSocketOrdersAction
export type TWebSocketOrdersErrorAction = (event: Event) => TWebSocketOrdersAction
export type TWebSocketOrdersOnMassageAction = (data: object) => TWebSocketOrdersAction
export type TWebSocketOrdersLinkingAction = (event: Event) => TWebSocketOrdersAction
export type TWebSocketOrdersDetachAction = (event: Event) => TWebSocketOrdersAction

export const webSocketOrdersConnectAction:TWebSocketOrdersConnectAction = (url) => ({
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_CONNECT,
    payload: url
})
export const webSocketOrdersDisconnectAction:TWebSocketOrdersDisconnectAction = () => ({
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_DISCONNECT
})
export const webSocketOrdersErrorAction:TWebSocketOrdersErrorAction = (event) => ({
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_ERROR,
    payload: event
})
export const webSocketOrdersOnMassageAction:TWebSocketOrdersOnMassageAction = (data) => ({
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_ON_MESSAGE,
    payload: data
})
export const webSocketOrdersLinkingAction:TWebSocketOrdersLinkingAction = (event) => ({
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_LINKING,
    payload: event
})
export const webSocketOrdersDetachAction:TWebSocketOrdersDetachAction = (event) => ({
    type: WebSocketOrdersActions.WEB_SOCKET_ORDERS_DETACH,
    payload: event
})
