import React from "react";
import ordersStyle from './StatusCompletedOrders.module.css'
import PropTypes from "prop-types";

export function OrdersStatus({title, count}) {
    return (
        <div className={ordersStyle.status}>
            <p className={`text text_type_main-medium text_color_primary ${ordersStyle.text}`}>{title}</p>
            <p className={`text text_type_digits-large text_color_primary ${ordersStyle.text}`}>{count}</p>
        </div>
    );
}

export function OrdersComplete({completeOrdersId, inWorkOrdersId}) {
    return (
        <div className={ordersStyle.container}>
            <div className={ordersStyle.complete}>
                <p className={'text text_type_main-medium text_color_primary mb-6'}>Готовы:</p>
                <ul className={ordersStyle.completeOrders}>
                    {completeOrdersId.map(orderId => <li className={"text text_type_digits-default text_color_success"} key={orderId}>{orderId}</li>)}
                </ul>
            </div>
            <div className={ordersStyle.inWork}>
                <p className={'text text_type_main-medium text_color_primary mb-6'}>В работе:</p>
                <ul className={ordersStyle.completeOrders}>
                    {inWorkOrdersId.map(orderId => <li className={"text text_type_digits-default text_color_primary"} key={orderId}>{orderId}</li>)}
                </ul>
            </div>
        </div>
    );
}
OrdersComplete.propTypes = {
    completeOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired),
    inWorkOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired),
}