import {ConstructorActions, TConstructorAction} from '../actions/constructorActions';
import {IConstructor, IIngredient} from '../../utils/interface'

export interface IConstructorState {
    items: IConstructor[];
    bun: IIngredient | null;
}

const defaultState:IConstructorState = {items: [], bun: null}

export const constructorReducer = (state = defaultState, action:TConstructorAction):IConstructorState => {
    switch (action.type) {
        case ConstructorActions.ADD_INGREDIENT_CONSTRUCTOR:
            return {...state, items: [...state.items, {cartId: Date.now(), ...action.payload}]}
        case ConstructorActions.CONSTRUCTOR_RESET:
            return {...state, items: []}
        case ConstructorActions.CONSTRUCTOR_DELETE:
            return {...state, items: state.items.filter(item => item.cartId !== action.payload)}
        case ConstructorActions.CONSTRUCTOR_ADD_BUN:
            return {...state, bun: action.payload}
        case ConstructorActions.CONSTRUCTOR_REORDER:
            const items = [...state.items]
            const prevIndex = action.payload.prevIndex
            const nextIndex = action.payload.nextIndex
            items.splice(action.payload.prevIndex, 1, state.items[nextIndex])
            items.splice(action.payload.nextIndex, 1, state.items[prevIndex])
            return {...state, items: [...items]}
        default:
            return state
    }
}