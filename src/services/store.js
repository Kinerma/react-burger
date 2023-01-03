import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from './reducers/rootReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancers);

export default store;
