export enum WebSocketUserActions {
    WEB_SOCKET_USER_CONNECT = 'WEB_SOCKET_USER_CONNECT',
    WEB_SOCKET_USER_DISCONNECT = 'WEB_SOCKET_USER_DISCONNECT',
    WEB_SOCKET_USER_ERROR = 'WEB_SOCKET_USER_ERROR',
    WEB_SOCKET_USER_ON_MESSAGE = 'WEB_SOCKET_USER_ON_MESSAGE',
    WEB_SOCKET_USER_LINKING = 'WEB_SOCKET_USER_LINKING',
    WEB_SOCKET_USER_DETACH = 'WEB_SOCKET_USER_DETACH'
}

export type TWebSocketUserAction = IWebSocketUserConnectAction | IWebSocketUserDisconnectAction | IWebSocketUserErrorAction | IWebSocketUserOnMassageAction | IWebSocketUserLinkingAction | IWebSocketUserDetachAction

interface IWebSocketUserConnectAction {
    type: WebSocketUserActions.WEB_SOCKET_USER_CONNECT
    payload: any
}
interface IWebSocketUserDisconnectAction {
    type: WebSocketUserActions.WEB_SOCKET_USER_DISCONNECT
}
interface IWebSocketUserErrorAction {
    type: WebSocketUserActions.WEB_SOCKET_USER_ERROR
    payload: any
}
interface IWebSocketUserLinkingAction {
    type: WebSocketUserActions.WEB_SOCKET_USER_LINKING
    payload: any
}
interface IWebSocketUserOnMassageAction {
    type: WebSocketUserActions.WEB_SOCKET_USER_ON_MESSAGE
    payload: any
}
interface IWebSocketUserDetachAction {
    type: WebSocketUserActions.WEB_SOCKET_USER_DETACH
    payload: any
}

export type TWebSocketUserConnectAction = (url: string) => TWebSocketUserAction
export type TWebSocketUserDisconnectAction = () => TWebSocketUserAction
export type TWebSocketUserErrorAction = (event: Event) => TWebSocketUserAction
export type TWebSocketUserOnMassageAction = (data: object) => TWebSocketUserAction
export type TWebSocketUserLinkingAction = (event: Event) => TWebSocketUserAction
export type TWebSocketUserDetachAction = (event: Event) => TWebSocketUserAction

export const webSocketUserConnectAction:TWebSocketUserConnectAction = (url: string) => ({
    type: WebSocketUserActions.WEB_SOCKET_USER_CONNECT,
    payload: url
})
export const webSocketUserDisconnectAction:TWebSocketUserDisconnectAction = () => ({
    type: WebSocketUserActions.WEB_SOCKET_USER_DISCONNECT
})
export const webSocketUserErrorAction:TWebSocketUserErrorAction = (event) => ({
    type: WebSocketUserActions.WEB_SOCKET_USER_ERROR,
    payload: event
})
export const webSocketUserOnMassageAction:TWebSocketUserOnMassageAction = (data) => ({
    type: WebSocketUserActions.WEB_SOCKET_USER_ON_MESSAGE,
    payload: data
})
export const webSocketUserLinkingAction:TWebSocketUserLinkingAction = (event) => ({
    type: WebSocketUserActions.WEB_SOCKET_USER_LINKING,
    payload: event
})
export const webSocketUserDetachAction:TWebSocketUserDetachAction = (event) => ({
    type: WebSocketUserActions.WEB_SOCKET_USER_DETACH,
    payload: event
})