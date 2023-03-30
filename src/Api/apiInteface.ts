import {IOrderType, IIngredient} from '../utils/interface'

export interface IOrderRespCreate {
    success: boolean,
    order: IOrderType,
    name: string
}

export interface IIngredientRespCreate {
    success: boolean,
    data: IIngredient[]
}

export interface IUserRespCreate {
    success: boolean,
    user: {email: string, name: string}
}

export interface ILoginResp {
    success: boolean,
    user: {email: string, name: string},
    accessToken: string,
    refreshToken: string
}

export interface ILogoutResp {
    success: boolean,
    message: string
}

export interface IRegisterResp {
    success: boolean,
    user: {email: string, name: string},
    accessToken: string,
    refreshToken: string
}

export interface IResetPasswordAccept {
    message: string,
    success: boolean
}

export interface IResetPassword {
    message: string,
    success: boolean
}

export interface IUpdateToken {
    success: boolean,
    accessToken: string,
    refreshToken: string
}

export interface IUpdateUser {
    success: boolean,
    user: {email: string, name: string}
}

export enum METHODS {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}