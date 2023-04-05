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
    payload: IIngredient
}

interface IConstructorBun {
    type: ConstructorActions.CONSTRUCTOR_ADD_BUN
    payload: IIngredient | null
}

interface IConstructorReset {
    type: ConstructorActions.CONSTRUCTOR_RESET
    payload: IConstructor[]
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

export const addIngredient = (ingredient: IIngredient):TConstructorAction => ({type: ConstructorActions.ADD_INGREDIENT_CONSTRUCTOR, payload: ingredient})
export const constructorReset = (cart: IConstructor[]):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_RESET, payload: cart})
export const constructorDelete = (cartId: number):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_DELETE, payload: cartId})
export const constructorBun = (bun:IIngredient | null):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_ADD_BUN, payload: bun})
export const constructorReorder = (prevIndex: number, nextIndex: number):TConstructorAction => ({type: ConstructorActions.CONSTRUCTOR_REORDER, payload: {prevIndex: prevIndex, nextIndex: nextIndex}})

