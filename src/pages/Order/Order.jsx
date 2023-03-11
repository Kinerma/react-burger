import OrderInfo from '../../components/OrderInfo/OrderInfo'
import Loader from '../../components/Loader/Loader'
import orderStyle from '../Order/Order.module.css'
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams, useLocation} from "react-router-dom";
import {webSocketUserConnectAction, webSocketUserDisconnectAction} from '../../services/actions/webSocketUserActions'
import {webSocketOrdersConnectAction, webSocketOrdersDisconnectAction} from '../../services/actions/webSocketOrdersActions'
import {webSocketToken} from '../../Api/api'
import useToken from '../../hooks/useToken'
import {webSocketOrdersSelectorNew} from '../../services/selectors/webSocketOrdersSelector'
import {webSocketUserSelectorNew} from '../../services/selectors/webSocketUserSelector'

const Order = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const token = useToken()
    const {id} = useParams()
    const ordersFeed = useSelector(location.pathname.includes("feed") ? webSocketOrdersSelectorNew : webSocketUserSelectorNew)
    const orders = ordersFeed.find(order => order._id === id)

    useEffect(() => {
        if (!ordersFeed.length) {
            if (location.pathname.includes("feed")) {
                dispatch(webSocketOrdersConnectAction(webSocketToken.ordersUrl))
                return () => dispatch(webSocketUserDisconnectAction())
            } else {
                dispatch(webSocketUserConnectAction(webSocketToken.useUrl(token.getToken().replace("Bearer ", ""))))
                return () => dispatch(webSocketOrdersDisconnectAction())
            }
        }
    }, [location])

    return (
        orders
        ?
        <div className={orderStyle.container}>
            <OrderInfo orderInfo={orders} />
        </div>
        :
        <Loader />
    );
};
export default Order;