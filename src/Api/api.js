import {checkResponse} from '../utils/typesIngredients'

export const BASE_URL_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients'
export const BASE_URL_ORDERS = 'https://norma.nomoreparties.space/api/orders'

export const getIngredient = () => {
  return fetch (BASE_URL_INGREDIENTS).then(checkResponse)
};
export const createOrder = (ingredienIdtList) => {
    return fetch(BASE_URL_ORDERS, {method:'POST', headers: {"Content-type": 'application/json'}, body: JSON.stringify({
            "ingredients": ingredienIdtList
        })}).then(checkResponse)
};

