import {createSelector} from "@reduxjs/toolkit";

export const webSocketOrdersReducerSelector = (state) => state.webSocketOrdersReducer
export const webSocketSelectorDefault = (state) => state.webSocketOrdersReducer.orders
export const webSocketOrdersReducerSelectorNew = createSelector(webSocketOrdersReducerSelector, state => state)
export const webSocketOrdersSelectorNew = createSelector(webSocketSelectorDefault, state => state)