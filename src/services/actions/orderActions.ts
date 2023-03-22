import {IOrderType} from "../../utils/interface";

export enum OrderActions {
    CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST',
    CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
    CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR'
}

export type TOrderAction = ICreateOrderRequest | ICreateOrderSuccess | ICreateOrderError

interface ICreateOrderRequest {
    type: OrderActions.CREATE_ORDER_REQUEST
}
interface ICreateOrderSuccess {
    type: OrderActions.CREATE_ORDER_SUCCESS;
    payload: any;
}
interface ICreateOrderError {
    type: OrderActions.CREATE_ORDER_ERROR;
    payload: string;
}

export const createOrderRequest = ():TOrderAction => ({type: OrderActions.CREATE_ORDER_REQUEST})
export const createOrderSuccess = (orderNumber: IOrderType):TOrderAction => ({type: OrderActions.CREATE_ORDER_SUCCESS, payload: orderNumber})
export const createOrderError = (errorMessage: string):TOrderAction => ({type: OrderActions.CREATE_ORDER_ERROR, payload: errorMessage})
