import feedStyle from './Feed.module.css';
import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {createIngredientsThunk} from '../../services/actions/createThunk';
import {newIngredientsDefaultSelector} from '../../services/selectors/ingredientsSelectors';
import {webSocketToken} from "../../Api/api";
import {webSocketOrdersConnectAction, webSocketOrdersDisconnectAction} from "../../services/actions/webSocketOrdersActions";
import {webSocketOrdersReducerSelectorNew} from '../../services/selectors/webSocketOrdersSelector';
import OrderCard from "../../components/OrderCard/OrderCard";
import {OrdersComplete, OrdersStatus} from "../../components/StatusCompletedOrders/StatusCompletedOrders";
import Loader from "../../components/Loader/Loader";

export default function Feed() {
    const dispatch = useDispatch()
    const ingredients = useSelector(newIngredientsDefaultSelector)
    const {total,totalToday,orders} = useSelector(webSocketOrdersReducerSelectorNew)
    const {completeOrder,statusOrder} = useMemo(() => orders.reduce((prev,order) => order.status === "done" ? {...prev, completeOrder: [...prev.completeOrder,order.number]} : {...prev, statusOrder: [...prev.statusOrder,order.number]},{completeOrder: [],statusOrder: []}),[orders])
    useEffect(() => {
        if (!ingredients.length) dispatch(createIngredientsThunk())
    },[ingredients])
    useEffect(() => {
        dispatch(webSocketOrdersConnectAction(webSocketToken.ordersUrl))
        return () => {dispatch(webSocketOrdersDisconnectAction())}
    },[])

    return (
        ingredients.length && orders.length
        ?
            <div className={feedStyle.container}>
                <p className={`text text_type_main-large ${feedStyle.text}`}>Лента заказов</p>
                <div className={feedStyle.orderContainer}>
                    <div className={feedStyle.feed}>
                        {orders.map(order => <OrderCard elementPosition={"feed"} orderInfo={order} key={order._id} />)}
                    </div>
                    <div className={"ml-15"}>
                        <OrdersComplete className={"mt-15"} completeOrdersId={completeOrder} inWorkOrdersId={statusOrder} />
                        <OrdersStatus  title={"Выполнено за все время:"} count={total} className={"mt-15"} key={"complete_all_time"} />
                        <OrdersStatus title={"Выполнено за сегодня:"} count={totalToday} className={"mt-15"} key={"complete_today"} />
                    </div>
                </div>
                <Outlet />
            </div>
            :
            <Loader />
    )
}
