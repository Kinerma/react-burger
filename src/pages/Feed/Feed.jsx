import orderStyle from './Feed.module.css'

export default function Feed() {
    return (
        <p className={`text text_type_main-large ${orderStyle.text}`}>Лента заказов</p>
    )
}