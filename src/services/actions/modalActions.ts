export enum ModalActions {
    ADD_INGREDIENTS_MODAL = 'ADD_INGREDIENTS_MODAL',
    DELETE_INGREDIENTS_MODAL = 'DELETE_INGREDIENTS_MODAL'
}

export type TModalAction = IAddIngredientModal | IDeleteIngredientModal

interface IAddIngredientModal {
    type: ModalActions.ADD_INGREDIENTS_MODAL
}
interface IDeleteIngredientModal {
    type: ModalActions.DELETE_INGREDIENTS_MODAL
}

export const addIngredientModal = ():TModalAction => ({type: ModalActions.ADD_INGREDIENTS_MODAL})
export const deleteIngredientModal = ():TModalAction => ({type: ModalActions.DELETE_INGREDIENTS_MODAL})