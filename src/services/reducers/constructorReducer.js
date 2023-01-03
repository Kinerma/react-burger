import {ADD_INGREDIENT_CONSTRUCTOR, CONSTRUCTOR_DELETE, CONSTRUCTOR_RESET, CONSTRUCTOR_REORDER} from '../actions/constructorActions';

const initialState = {
    bun: false,
    ingredients: [],
};

export const constructorReduce = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_CONSTRUCTOR:
            if (action.payload.type === 'bun') {
                return {
                    ...state,
                    bun: action.payload
                }
            }
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case CONSTRUCTOR_DELETE:
            return {
                ...state,
                ingredients: [...state.ingredients.filter((item) => item.key !==action.payload)],
            }
        case CONSTRUCTOR_RESET:
             return {
                 bun: false,
                 ingredients: []
             }
        case CONSTRUCTOR_REORDER:
            const ingredients = [...state.ingredients]
            ingredients.splice(action.hoverIndex, 0, ingredients.splice(action.dragIndex, 1)[0])
            return {
                ...state,
                ingredients: ingredients
            }
        default:
            return state
    };
};