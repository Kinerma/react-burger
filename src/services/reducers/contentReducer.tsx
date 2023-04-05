import {ModalActions, TModalAction} from '../actions/modalActions';
import {IIngredient} from "../../utils/interface";

export interface IInitialState {
    currentIngredient: null | IIngredient
}
const defaultState:IInitialState = {
    currentIngredient: null
}

export const contentReducer = (state = defaultState, action:TModalAction):IInitialState => {
    switch (action.type) {
        case ModalActions.ADD_INGREDIENTS_MODAL:
            return {
                ...state,
                currentIngredient: action.payload
            }
        case ModalActions.DELETE_INGREDIENTS_MODAL:
            return {
                ...state,
                currentIngredient: null
            }
        default:
            return state;
    }
};