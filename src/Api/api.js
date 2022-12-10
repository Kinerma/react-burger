const getIngredient = () => {
  return fetch (`https://norma.nomoreparties.space/api/ingredients`).then(res => {
      if (res.ok) {
          return res.json()
      }
      return Promise.reject(res.status)
  })
};

export default getIngredient;
