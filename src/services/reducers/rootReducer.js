import {combineReducers} from "redux";
import {constructorReduce} from "./constructorReducer";
import {contentReduce} from "./contentReducer";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReduce} from "./orderReducer";

const rootReducer = combineReducers({
    constructorReduce,
    contentReduce,
    ingredientsReducer,
    orderReduce
})

export default rootReducer