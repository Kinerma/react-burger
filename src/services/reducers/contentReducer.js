import {ADD_INGREDIENTS_MODAL, DELETE_INGREDIENTS_MODAL} from '../actions/modalActions';

const initialState = {
    currentIngredient: null
};

export const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENTS_MODAL:
            return {
                ...state,
                currentIngredient: action.payload
            }
        case DELETE_INGREDIENTS_MODAL:
            return {
                ...state,
                currentIngredient: null
            }
        default:
            return state;
    };
};