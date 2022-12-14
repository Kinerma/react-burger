
export const getIngredient = () => {
  return fetch (`https://norma.nomoreparties.space/api/ingredients`).then(res => {
      if (res.ok) {
          return res.json()
      }
      return Promise.reject(res.status)
  })
};
export const createOrder = (ingredienIdtList) => {
    return fetch(`https://norma.nomoreparties.space/api/orders`, {method:'POST', headers: {"Content-type": 'application/json'}, body: JSON.stringify({
            "ingredients": ingredienIdtList
        })}).then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(res.status)
    })
};

