import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import socketMiddleware from "./middleware/socketMiddleware";
import {createWSActions} from "./middleware/socketMiddleware";
import {
    WEB_SOCKET_ORDERS_CONNECT,
    WEB_SOCKET_ORDERS_DISCONNECT,
    webSocketOrdersErrorAction,
    webSocketOrdersOnMassageAction,
    webSocketOrdersLinkingAction,
    webSocketOrdersDetachAction
} from '../services/actions/webSocketOrdersActions'
import {
    WEB_SOCKET_USER_CONNECT,
    WEB_SOCKET_USER_DISCONNECT,
    webSocketUserErrorAction,
    webSocketUserOnMassageAction,
    webSocketUserLinkingAction,
    webSocketUserDetachAction
} from '../services/actions/webSocketUserActions'

const wsFeedActions = createWSActions(
    webSocketOrdersErrorAction,
    webSocketOrdersLinkingAction,
    WEB_SOCKET_ORDERS_CONNECT,
    webSocketOrdersDetachAction,
    webSocketOrdersOnMassageAction,
    WEB_SOCKET_ORDERS_DISCONNECT)
const wsUserActions = createWSActions(
    webSocketUserErrorAction,
    webSocketUserLinkingAction,
    WEB_SOCKET_USER_CONNECT,
    webSocketUserDetachAction,
    webSocketUserOnMassageAction,
    WEB_SOCKET_USER_DISCONNECT)

const enhancers = composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsFeedActions), socketMiddleware(wsUserActions)));
const store = createStore(rootReducer, enhancers);

export default store;
