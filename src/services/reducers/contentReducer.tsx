import {ModalActions, TModalAction} from '../actions/modalActions';

export interface IInitialState {
    currentIngredient: null | string
}
const defaultState:IInitialState = {
    currentIngredient: null
}

export const contentReducer = (state = defaultState, action:TModalAction):IInitialState => {
    switch (action.type) {
        case ModalActions.ADD_INGREDIENTS_MODAL:
            return {
                ...state,
                currentIngredient: null
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