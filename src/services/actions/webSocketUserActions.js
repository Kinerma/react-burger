export const WEB_SOCKET_USER_CONNECT = 'WEB_SOCKET_USER_CONNECT'
export const WEB_SOCKET_USER_DISCONNECT = 'WEB_SOCKET_USER_DISCONNECT'
export const WEB_SOCKET_USER_ERROR = 'WEB_SOCKET_USER_ERROR'
export const WEB_SOCKET_USER_ON_MESSAGE = 'WEB_SOCKET_USER_ON_MESSAGE'
export const WEB_SOCKET_USER_LINKING = 'WEB_SOCKET_USER_LINKING'
export const WEB_SOCKET_USER_DETACH = 'WEB_SOCKET_USER_DETACH'

export const webSocketUserConnectAction = url => ({type: WEB_SOCKET_USER_CONNECT, payload: url})
export const webSocketUserDisconnectAction = () => ({type: WEB_SOCKET_USER_DISCONNECT})
export const webSocketUserErrorAction = event => ({type: WEB_SOCKET_USER_ERROR, payload: event})
export const webSocketUserOnMassageAction = data => ({type: WEB_SOCKET_USER_ON_MESSAGE, payload: data})
export const webSocketUserLinkingAction = event => ({type: WEB_SOCKET_USER_LINKING, payload: event})
export const webSocketUserDetachAction = event => ({type: WEB_SOCKET_USER_DETACH, payload: event})