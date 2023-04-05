import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const defaultUserSelector = (state:RootState) => state.userReducer

export const newUserSelector = createSelector(defaultUserSelector, state => {
    return {...state, name: state.name,email: state.email, isAuth: !!state.email, completed: state.completed, loading: state.loading}
})