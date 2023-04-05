import feedStyle from './Feed.module.css';
import React, {useEffect, useMemo} from 'react';
import {Outlet} from "react-router-dom";
import {newIngredientsDefaultSelector} from '../../services/selectors/ingredientsSelectors';
import {webSocketToken} from "../../Api/api";
import {webSocketOrdersConnectAction, webSocketOrdersDisconnectAction} from "../../services/actions/webSocketOrdersActions";
import {webSocketOrdersReducerSelectorNew} from '../../services/selectors/webSocketOrdersSelector';
import OrderCard from "../../components/OrderCard/OrderCard";
import {OrdersComplete, OrdersStatus} from "../../components/StatusCompletedOrders/StatusCompletedOrders";
import Loader from "../../components/Loader/Loader";
import {IOrderType} from '../../utils/interface';
import {useAppDispatch} from '../../hooks/UseAppDispatch';
import {useSelectors} from '../../hooks/useSelector'

export default function Feed() {
    const dispatch = useAppDispatch()
    const ingredients = useSelectors(newIngredientsDefaultSelector)
    const orderReducer = useSelectors(webSocketOrdersReducerSelectorNew)
    const {completeOrder,statusOrder} = useMemo(() => orderReducer.orders.reduce((prev:{completeOrder: [], statusOrder: []},order:IOrderType) => order.status === "done" ? {...prev, completeOrder: [...prev.completeOrder,order.number]} : {...prev, statusOrder: [...prev.statusOrder,order.number]},{completeOrder: [],statusOrder: []}),[orderReducer])
    useEffect(() => {
        dispatch(webSocketOrdersConnectAction(webSocketToken.ordersUrl))
        return () => {dispatch(webSocketOrdersDisconnectAction())}
    },[])

    return (
        ingredients.length && orderReducer.orders.length
        ?
            <div className={feedStyle.container}>
                <p className={`text text_type_main-large ${feedStyle.text}`}>Лента заказов</p>
                <div className={feedStyle.orderContainer}>
                    <div className={feedStyle.feed}>
                        {orderReducer.orders.map((order: IOrderType) => <OrderCard elementPosition={"feed"} orderInfo={order} key={order._id} />)}
                    </div>
                    <div className={"ml-15"}>
                        <OrdersComplete className={"mt-15"} completeOrdersId={completeOrder} inWorkOrdersId={statusOrder} />
                        <OrdersStatus  title={"Выполнено за все время:"} count={orderReducer.total} className={"mt-15"} key={"complete_all_time"} />
                        <OrdersStatus title={"Выполнено за сегодня:"} count={orderReducer.totalToday} className={"mt-15"} key={"complete_today"} />
                    </div>
                </div>
                <Outlet />
            </div>
            :
            <Loader />
    )
}
