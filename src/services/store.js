import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {webSocketOrders} from './middleware/webSocketOrders';
import {webSocketUser} from './middleware/webSocketUser'

const enhancers = composeWithDevTools(applyMiddleware(thunk, webSocketUser(), webSocketOrders()));
const store = createStore(rootReducer, enhancers);

export default store;
