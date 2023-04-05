import {createSelector} from "@reduxjs/toolkit";
import {RootState} from '../store';

export const webSocketUserReducerSelector = (state:RootState) => state.webSocketUserReducer
export const webSocketUserSelectorDefault = (state:RootState) => state.webSocketUserReducer.orders
export const webSocketUserReducerSelectorNew = createSelector(webSocketUserReducerSelector, state => state)
export const webSocketUserSelectorNew = createSelector(webSocketUserSelectorDefault, state => state)