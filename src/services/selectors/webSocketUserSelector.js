import {createSelector} from "@reduxjs/toolkit";

export const webSocketUserReducerSelector = (state) => state.webSocketUserReducer
export const webSocketUserSelectorDefault = (state) => state.webSocketUserReducer.orders
export const webSocketUserReducerSelectorNew = createSelector(webSocketUserReducerSelector, state => state)
export const webSocketUserSelectorNew = createSelector(webSocketUserSelectorDefault, state => state)