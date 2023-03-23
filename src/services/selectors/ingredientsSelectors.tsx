import {createSelector} from "@reduxjs/toolkit";
import {RootState} from '../store';
import {IInitialState} from '../reducers/ingredientsReducer'

export const ingredientsReducerSelector = (state:RootState) => state.ingredientsReducer
export const ingredientsDefaultSelector = (state:RootState):IInitialState['ingredients'] => state.ingredientsReducer.ingredients
export const newIngredientsReducerSelector = createSelector(ingredientsReducerSelector,state => (state))
export const newIngredientsDefaultSelector = createSelector(ingredientsDefaultSelector,state => state)