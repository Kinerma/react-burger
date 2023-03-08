import OrderInfo from '../../components/OrderInfo/OrderInfo'
import Loader from '../../components/Loader/Loader'
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams, useLocation} from "react-router-dom";
import {webSocketUserConnectAction, webSocketUserDisconnectAction} from '../../services/actions/webSocketUserActions'
import {webSocketOrdersConnectAction, webSocketOrdersDisconnectAction} from '../../services/actions/webSocketOrdersActions'
import {createIngredientsThunk} from '../../services/actions/createThunk'
import {webSocketToken} from '../../Api/api'
import useToken from '../../hooks/useToken'
import {newIngredientsDefaultSelector} from '../../services/selectors/ingredientsSelectors'
import {webSocketOrdersSelectorNew} from '../../services/selectors/webSocketOrdersSelector'
import {webSocketUserSelectorNew} from '../../services/selectors/webSocketUserSelector'

const Order = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const token = useToken()
    const {id} = useParams()
    const ingredients = useSelector(newIngredientsDefaultSelector)
    const ordersFeed = useSelector(location.pathname.includes("feed") ? webSocketOrdersSelectorNew : webSocketUserSelectorNew)
    const orders = location.state?.order || ordersFeed.find(order => order._id === id)
    useEffect(() => {
        if (!ingredients.length) dispatch(createIngredientsThunk())
    }, [dispatch, ingredients])
    useEffect(() => {
        if (!ordersFeed.length) {
            if (location.pathname.includes("feed")) {
                dispatch(webSocketUserConnectAction(webSocketToken.ordersUrl))
                return () => dispatch(webSocketUserDisconnectAction())
            } else {
                dispatch(webSocketOrdersConnectAction(webSocketToken.useUrl(token.getToken().replace("Bearer ", ""))))
                return () => dispatch(webSocketOrdersDisconnectAction())
            }
        }
    }, [dispatch, location, ordersFeed, token])

    return (
        orders
        ?
        <div>
            <OrderInfo orderInfo={orders} />
        </div>
        :
        <Loader />
    );
};
export default Order;