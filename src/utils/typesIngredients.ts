export const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((data) => Promise.reject(data))
};

export const displayStatus = (status: ('created' | 'pending' | 'done')) => {
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

export const getData = (date: string) => {
    let day;
    const orderDate = new Date(Date.parse(date.replace('z', '')))
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

export function createArray<T = any>(array: T[]): T[] {
    return array.reduce((acc: T[], item) => {
        if (!acc.includes(item))
            acc.push(item)
        return acc
    }, [])
}
