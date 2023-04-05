import {createSelector} from "@reduxjs/toolkit";
import {RootState} from '../store';

export const webSocketOrdersReducerSelector = (state:RootState) => state.webSocketOrdersReducer
export const webSocketSelectorDefault = (state:RootState) => state.webSocketOrdersReducer.orders
export const webSocketOrdersReducerSelectorNew = createSelector(webSocketOrdersReducerSelector, state => state)
export const webSocketOrdersSelectorNew = createSelector(webSocketSelectorDefault, state => state)