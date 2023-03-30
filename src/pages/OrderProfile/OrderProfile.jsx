import orderProfileStyle from '../OrderProfile/OrderProfile.module.css';
import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import useToken from "../../hooks/useToken";
import {webSocketToken} from "../../Api/api";
import {webSocketUserConnectAction, webSocketUserDisconnectAction} from "../../services/actions/webSocketUserActions";
import {webSocketUserSelectorNew} from "../../services/selectors/webSocketUserSelector";
import OrderCard from "../../components/OrderCard/OrderCard";

export const OrderProfile = () => {
    const dispatch = useDispatch()
    const token = useToken
    const orders = useSelector(webSocketUserSelectorNew)
    useEffect(() => {
        dispatch(webSocketUserConnectAction(webSocketToken.useUrl(token.getToken().split(" ")[1])))
        return() => {
            dispatch(webSocketUserDisconnectAction())
        }
    }, [])
    return (
        <div className={orderProfileStyle.container}>
            {orders.map(order => <OrderCard elementPosition={"profile"} orderInfo={order} key={order._id}/> )}
            <Outlet />
        </div>
    );
};
