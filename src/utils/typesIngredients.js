import PropTypes from 'prop-types';

export const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.json());
};

export const IngredientName = [
    {name: 'bun', rename: 'Булки'},
    {name: 'sauce', rename: 'Соусы'},
    {name: 'main', rename: 'Начинки'}
];

export const ingredientType = PropTypes.shape({
    "_id": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "type": PropTypes.string.isRequired,
    "proteins": PropTypes.number.isRequired,
    "fat": PropTypes.number.isRequired,
    "carbohydrates": PropTypes.number.isRequired,
    "calories": PropTypes.number.isRequired,
    "price": PropTypes.number.isRequired,
    "image": PropTypes.string.isRequired,
    "image_mobile": PropTypes.string.isRequired,
    "image_large": PropTypes.string.isRequired,
    "__v": PropTypes.number.isRequired,
    "ingredients": PropTypes.arrayOf(PropTypes.string.isRequired),
    "createdAt": PropTypes.string.isRequired,
    "status": PropTypes.string.isRequired,
    "number": PropTypes.number.isRequired,
});

export const displayStatus = (status) => {
    switch (status) {
        case 'created':
            return 'Создан'
        case 'pending':
            return 'Готовится'
        case 'done':
            return 'Выполнен'
        default:
            return 'done'
    }
}

export const getData = (date) => {
    let day;
    const orderDate = new Date(Date.parse(date))
    const timeZone = -orderDate.getTimezoneOffset() / 60
    const currentDay = new Date().getDate()
    switch (orderDate.getDate()) {
        case currentDay:
            day = 'Сегодня'
            break
        case currentDay -1:
            day = 'Вчера'
            break
        case currentDay -2:
            day = 'Позавчера'
            break
        default:
            day = orderDate.toLocaleDateString("ru-RU",{weekday: "long",day: "numeric"}).toString()
            break
    }
    return `${day}, ${orderDate.toLocaleTimeString("ru-RU",{hour:"numeric",minute:"numeric"})} i-GMT${timeZone > 0 && "+"}${timeZone}`
}

