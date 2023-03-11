export const WEB_SOCKET_ORDERS_CONNECT = 'WEB_SOCKET_ORDERS_CONNECT'
export const WEB_SOCKET_ORDERS_DISCONNECT = 'WEB_SOCKET_ORDERS_DISCONNECT'
export const WEB_SOCKET_ORDERS_ERROR = 'WEB_SOCKET_ORDERS_ERROR'
export const WEB_SOCKET_ORDERS_ON_MESSAGE = 'WEB_SOCKET_ORDERS_ON_MESSAGE'
export const WEB_SOCKET_ORDERS_LINKING = 'WEB_SOCKET_ORDERS_LINKING'
export const WEB_SOCKET_ORDERS_DETACH = 'WEB_SOCKET_ORDERS_DETACH'

export const webSocketOrdersConnectAction = url => ({type: WEB_SOCKET_ORDERS_CONNECT, payload: url})
export const webSocketOrdersDisconnectAction = () => ({type: WEB_SOCKET_ORDERS_DISCONNECT})
export const webSocketOrdersErrorAction = event => ({type: WEB_SOCKET_ORDERS_ERROR, payload: event})
export const webSocketOrdersOnMassageAction = data => ({type: WEB_SOCKET_ORDERS_ON_MESSAGE, payload: data})
export const webSocketOrdersLinkingAction = event => ({type: WEB_SOCKET_ORDERS_LINKING, payload: event})
export const webSocketOrdersDetachAction = event => ({type: WEB_SOCKET_ORDERS_DETACH, payload: event})