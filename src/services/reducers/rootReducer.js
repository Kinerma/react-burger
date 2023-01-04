import {combineReducers} from "redux";
import {constructorReduce} from "./constructorReducer";
import {contentReduce} from "./contentReducer";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";

const rootReducer = combineReducers({
    constructorReduce,
    contentReduce,
    ingredientsReducer,
    orderReducer
})

export default rootReducer