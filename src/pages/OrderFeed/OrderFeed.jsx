import orderStyle from './OrderFeed.module.css'

export default function OrderFeed() {
    return (
        <p className={`text text_type_main-large ${orderStyle.text}`}>Лента заказов</p>
    )
}