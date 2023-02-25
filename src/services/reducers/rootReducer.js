import {combineReducers} from "redux";
import {constructorReducer} from "./constructorReducer";
import {contentReducer} from "./contentReducer";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    constructorReducer,
    contentReducer,
    ingredientsReducer,
    orderReducer,
    userReducer
})

export default rootReducer