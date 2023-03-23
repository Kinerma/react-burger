import {TIngredientsAction} from '../actions/ingredientsActions';
import {TOrderAction} from '../actions/orderActions';
import {TUserAction} from '../actions/userActions';
import {TWebSocketOrdersAction} from '../actions/webSocketOrdersActions';
import {TWebSocketUserAction} from '../actions/webSocketUserActions';

export type Actions = TIngredientsAction | TOrderAction | TUserAction | TWebSocketUserAction | TWebSocketOrdersAction