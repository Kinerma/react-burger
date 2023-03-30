import OrderInfo from '../../components/OrderInfo/OrderInfo'
import Loader from '../../components/Loader/Loader'
import orderStyle from '../Order/Order.module.css'
import {useEffect} from "react";
import {useParams, useLocation} from "react-router-dom";
import {webSocketUserConnectAction, webSocketUserDisconnectAction} from '../../services/actions/webSocketUserActions'
import {webSocketOrdersConnectAction, webSocketOrdersDisconnectAction} from '../../services/actions/webSocketOrdersActions'
import {webSocketToken} from '../../Api/api'
import {webSocketOrdersSelectorNew} from '../../services/selectors/webSocketOrdersSelector'
import {webSocketUserSelectorNew} from '../../services/selectors/webSocketUserSelector'
import {useAppDispatch} from '../../hooks/UseAppDispatch'
import {useSelectors} from '../../hooks/useSelector'
import {IOrderType} from '../../utils/interface'
import useToken from '../../hooks/useToken'

const Order = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const {id} = useParams()
    const ordersFeed = useSelectors(location.pathname.includes("feed") ? webSocketOrdersSelectorNew : webSocketUserSelectorNew)
    const orders = ordersFeed.find((order:IOrderType) => order._id === id)

    useEffect(() => {
        if (!ordersFeed.length) {
            const isFeed = location.pathname.includes("feed")
            const action = isFeed ? webSocketOrdersConnectAction(webSocketToken.ordersUrl) : webSocketUserConnectAction(webSocketToken.useUrl(useToken.getToken().replace("Bearer ", "")))
            const destructionAction = isFeed ? webSocketUserDisconnectAction() : webSocketOrdersDisconnectAction()
            dispatch(action)
            return () => {
                dispatch(destructionAction)
            }
        }
    }, [location, dispatch, orders])

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