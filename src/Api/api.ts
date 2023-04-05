import {checkResponse} from '../utils/typesIngredients'
import {IUserAuth} from '../utils/interface'
import {
    IIngredientRespCreate,
    ILoginResp,
    ILogoutResp,
    IOrderRespCreate,
    IRegisterResp,
    IResetPassword,
    IResetPasswordAccept,
    IUpdateToken,
    IUpdateUser,
    IUserRespCreate,
    METHODS
} from './apiInteface'

class Api {
    private readonly basicUrl:string

    constructor(basicUrl = 'https://norma.nomoreparties.space') {
        this.basicUrl = basicUrl
    }
    makeRequest = (endpoint: string, method: METHODS, body: null | any = null, authorization: null | string = null) => {
        const settings: any = {
            method: method,
            headers: {
                'Content-type': 'application/json',
            },
        }
        if (authorization) {
            settings.headers['Authorization'] = authorization
        }
        if (body) {
            settings.body = JSON.stringify(body)
        }
        return fetch(endpoint, settings).then(checkResponse)
    }
    getIngredient = ():Promise<IIngredientRespCreate> => this.makeRequest(`${this.basicUrl}/api/ingredients`,METHODS.GET)
    createOrder = (ingredientIdtList: string[], token: string):Promise<IOrderRespCreate> => this.makeRequest(`${this.basicUrl}/api/orders`,METHODS.POST,{ingredients: ingredientIdtList}, token)
    registrationUser = (name: string, email: string, password: string):Promise<IRegisterResp> => this.makeRequest(`${this.basicUrl}/api/auth/register`,METHODS.POST,{name, password, email})
    login = (email: string, password: string):Promise<ILoginResp> => this.makeRequest(`${this.basicUrl}/api/auth/login`,METHODS.POST,{password, email})
    renewToken = (refreshToken: string):Promise<IUpdateToken> => this.makeRequest(`${this.basicUrl}/api/auth/token`,METHODS.POST,{token: refreshToken})
    logout = (refreshToken: string):Promise<ILogoutResp> => this.makeRequest(`${this.basicUrl}/api/auth/logout`,METHODS.POST,{token: refreshToken})
    getUser = (token: string):Promise<IUserRespCreate> => this.makeRequest(`${this.basicUrl}/api/auth/user`,METHODS.GET,null,token)
    reset = (email: string):Promise<IResetPassword> => this.makeRequest(`${this.basicUrl}/api/password-reset`,METHODS.POST,{email})
    resetAccept = (password: string, code: string):Promise<IResetPasswordAccept> => this.makeRequest(`${this.basicUrl}/api/password-reset/reset`,METHODS.POST,{password,token: code})
    updateUser = (updateUser: IUserAuth,token: string):Promise<IUpdateUser> => this.makeRequest(`${this.basicUrl}/api/auth/user`,METHODS.PATCH,updateUser,token)
}

export const webSocketToken = {
    ordersUrl: "wss://norma.nomoreparties.space/orders/all",
    useUrl: (token: string) => `wss://norma.nomoreparties.space/orders?token=${token}`
}

export default new Api();

