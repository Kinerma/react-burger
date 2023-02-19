import {GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_ERROR} from '../actions/ingredientsActions';

const initialState = {
    ingredients: [],
    isLoading: false,
    isFail: false,
    isSuccess: false
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isFail: false,
                isSuccess: false
            }
        case GET_INGREDIENT_SUCCESS:
            return {
                ...state,
                ingredients: action.payload,
                isLoading: false,
                isFail: false,
                isSuccess: true
            }
        case GET_INGREDIENT_ERROR:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                isSuccess: false
            }
        default:
            return state;
    };
};