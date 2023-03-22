import {combineReducers} from "redux";
import {constructorReducer} from "./constructorReducer";
import {contentReducer} from "./contentReducer";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";
import userReducer from "./userReducer";
import {webSocketOrdersReducer} from "./webSocketOrdersReducer";
import {webSocketUserReducer} from "./webSocketUserReducer";

const rootReducer = combineReducers({
    constructorReducer,
    contentReducer,
    ingredientsReducer,
    orderReducer,
    userReducer,
    webSocketOrdersReducer,
    webSocketUserReducer
})

export default rootReducer