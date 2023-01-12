import {combineReducers} from "redux";
import {constructorReducer} from "./constructorReducer";
import {contentReducer} from "./contentReducer";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";

const rootReducer = combineReducers({
    constructorReducer,
    contentReducer,
    ingredientsReducer,
    orderReducer
})

export default rootReducer