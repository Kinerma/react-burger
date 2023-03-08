import React from "react";
import OrdersStyle from './StatusCompletedOrders.module.css'
import PropTypes from "prop-types";

export function OrdersStatus({title, count}) {
    return (
        <div>
            <p className={`text text_type_main-medium text_color_primary`}>{title}</p>
            <p className={`text text_type_digits-large text_color_primary`}>{count}</p>
        </div>
    );
}

export function OrdersComplete({completeOrdersId, inWorkOrdersId}) {
    return (
        <div>
            <div>
                <p>Готовы:</p>
                <ul>
                    {completeOrdersId.map(orderId => <li className={"text text_type_main-medium text_color_success"} key={orderId}>{orderId}</li>)}
                </ul>
            </div>
            <div>
                <p>В работе:</p>
                <ul>
                    {inWorkOrdersId.map(orderId => <li className={"text text_type_main-medium text_color_primary"} key={orderId}>{orderId}</li>)}
                </ul>
            </div>
        </div>
    );
}
OrdersComplete.propTypes = {
    completeOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired),
    inWorkOrdersId: PropTypes.arrayOf(PropTypes.number.isRequired),
}