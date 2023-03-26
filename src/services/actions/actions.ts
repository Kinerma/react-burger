import {TIngredientsAction} from './ingredientsActions';
import {TOrderAction} from './orderActions';
import {TUserAction} from './userActions';
import {TWebSocketOrdersAction} from './webSocketOrdersActions';
import {TWebSocketUserAction} from './webSocketUserActions';
import {TConstructorAction} from './constructorActions'

export type Actions = TIngredientsAction | TOrderAction | TUserAction | TWebSocketUserAction | TWebSocketOrdersAction | TConstructorAction