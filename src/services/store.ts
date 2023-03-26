import { createStore, applyMiddleware} from "redux";
import thunk, {ThunkDispatch} from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import socketMiddleware from "./middleware/socketMiddleware";
import {IWsActions} from "./middleware/socketMiddleware";
import {Actions} from "./actions/actions";
import {
    WebSocketOrdersActions,
    webSocketOrdersErrorAction,
    webSocketOrdersOnMassageAction,
    webSocketOrdersLinkingAction,
    webSocketOrdersDetachAction
} from './actions/webSocketOrdersActions'
import {
    WebSocketUserActions,
    webSocketUserErrorAction,
    webSocketUserOnMassageAction,
    webSocketUserLinkingAction,
    webSocketUserDetachAction
} from './actions/webSocketUserActions'

const wsFeedActions: IWsActions = {
    onErrorAction: webSocketOrdersErrorAction,
    onOpenAction: webSocketOrdersLinkingAction,
    connectStartType: WebSocketOrdersActions.WEB_SOCKET_ORDERS_CONNECT,
    onCloseAction: webSocketOrdersDetachAction,
    onMassageAction: webSocketOrdersOnMassageAction,
    connectStopType: WebSocketOrdersActions.WEB_SOCKET_ORDERS_DISCONNECT
}
const wsUserActions: IWsActions = {
    onErrorAction: webSocketUserErrorAction,
    onOpenAction: webSocketUserLinkingAction,
    connectStartType: WebSocketUserActions.WEB_SOCKET_USER_CONNECT,
    onCloseAction: webSocketUserDetachAction,
    onMassageAction: webSocketUserOnMassageAction,
    connectStopType: WebSocketUserActions.WEB_SOCKET_USER_DISCONNECT
}

const enhancers = composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsFeedActions), socketMiddleware(wsUserActions)));
const store = createStore(rootReducer, enhancers);

export type RootState = ReturnType<typeof store.getState>
export type ActionsDispatch = typeof store.dispatch & ThunkDispatch<RootState, any, Actions>

export default store;
