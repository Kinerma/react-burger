import {IIngredient, IConstructor} from '../../utils/interface'

export enum ConstructorActions {
    ADD_INGREDIENT_CONSTRUCTOR = 'ADD_INGREDIENT_CONSTRUCTOR',
    CONSTRUCTOR_DELETE = 'CONSTRUCTOR_DELETE',
    CONSTRUCTOR_RESET = 'CONSTRUCTOR_RESET',
    CONSTRUCTOR_ADD_BUN = 'CONSTRUCTOR_ADD_BUN',
    CONSTRUCTOR_REORDER = 'CONSTRUCTOR_REORDER'
}

interface IAddIngredient {
    type: ConstructorActions.ADD_INGREDIENT_CONSTRUCTOR
    payload: IConstructor[]
}

interface IConstructorBun {
    type: ConstructorActions.CONSTRUCTOR_ADD_BUN
    payload: IIngredient | null
}

interface IConstructorReset {
    type: ConstructorActions.CONSTRUCTOR_RESET
    payload: IIngredient
}

interface IConstructorDelete {
    type: ConstructorActions.CONSTRUCTOR_DELETE
    payload: number
}

interface IConstructorReorder {
    type: ConstructorActions.CONSTRUCTOR_REORDER
    payload: {prevIndex: number, nextIndex: number}
}

export type TConstructorAction = IAddIngredient | IConstructorBun | IConstructorReset | IConstructorDelete | IConstructorReorder

export const addIngredient = (cart: IConstructor[]):TConstructorAction => ({type: ConstructorActions.ADD_INGREDIENT_CONSTRUCTOR, payload: cart})
export const constructorReset = (ingredient: IIngredient):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_RESET, payload: ingredient})
export const constructorDelete = (cartId: number):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_DELETE, payload: cartId})
export const constructorBun = (bun:IIngredient | null):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_ADD_BUN, payload: bun})
export const constructorReorder = (prevIndex: number, nextIndex: number):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_REORDER, payload: {prevIndex: prevIndex, nextIndex: nextIndex}})

