import useAuthorization from "../../hooks/useAuthorization";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";

const Autorization = ({children}) => {
    const {isAuth} = useAuthorization()
    return (
        isAuth ? children : <Navigate to={'/login'} />
    )
}

Autorization.propTypes = {children: PropTypes.element.isRequired}

export default Autorization;