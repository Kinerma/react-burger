import {createSelector} from "@reduxjs/toolkit";

export const ingredientsReducerSelector = state => state.ingredientsReducer
export const ingredientsDefaultSelector = state => state.ingredientsReducer.ingredients
export const newIngredientsReducerSelector = createSelector(ingredientsReducerSelector,state => (state))
export const newIngredientsDefaultSelector = createSelector(ingredientsDefaultSelector,state => state)