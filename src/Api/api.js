import {checkResponse} from '../utils/typesIngredients'

class Api {
    constructor() {
        this.basicUrl = 'https://norma.nomoreparties.space'
    }
    makeRequest = (endpoint, method, body = null, authorization = null) => {
        const settings = {
            method: method,
            headers: {
                'Content-type': 'application/json',
            },
        }
        if (authorization) {
            settings.headers.Authorization = authorization
        }
        if (body) {
            settings.body = JSON.stringify(body)
        }
        return fetch(endpoint, settings).then(checkResponse)
    }
    getIngredient = () => this.makeRequest(`${this.basicUrl}/api/ingredients`,"GET")
    createOrder = (ingredientIdtList) => this.makeRequest(`${this.basicUrl}/api/orders`,"POST",{ingredients: ingredientIdtList})
    registrationUser = (name,email,password) => this.makeRequest(`${this.basicUrl}/api/auth/register`,"POST",{name, password, email})
    login = (email,password) => this.makeRequest(`${this.basicUrl}/api/auth/login`,"POST",{password, email})
    renewToken = (refreshToken) => this.makeRequest(`${this.basicUrl}/api/auth/token`,"POST",{token: refreshToken})
    logout = (refreshToken) => this.makeRequest(`${this.basicUrl}/api/auth/logout`,"POST",{token: refreshToken})
    getUser = (token) => this.makeRequest(`${this.basicUrl}/api/auth/user`,"GET",null,token)
    reset = (email) => this.makeRequest(`${this.basicUrl}/api/password-reset`,"POST",{email})
    resetAccept = (password,code) => this.makeRequest(`${this.basicUrl}/api/password-reset/reset`,"POST",{password,token: code})
    updateUser = (updateUser,token) => this.makeRequest(`${this.basicUrl}/api/auth/user`,"PATCH",updateUser,token)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Api();

