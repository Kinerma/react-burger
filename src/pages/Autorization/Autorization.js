import useAuthorization from "../../hooks/useAuthorization";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Autorization = ({children}) => {
    const {isAuth, completed, error} = useAuthorization()
    if (!completed && error) {
        return (
            isAuth ? children : <Navigate to={'/login'} />
        )
    }
    if (completed) {
        return (
            isAuth ? children : <Navigate to={'/login'} />
        )
    }
    if (!completed && !error) {
        return (
            <Loader />
        )
    }
}

Autorization.propTypes = {children: PropTypes.element.isRequired}

export default Autorization;