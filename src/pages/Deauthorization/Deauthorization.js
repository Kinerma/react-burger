import useAuthorization from "../../hooks/useAuthorization";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

const Deauthorization = ({children}) => {
    const {isAuth} = useAuthorization()
    return(
        !isAuth ? children : <Navigate to={'/'} />
    )
}

Deauthorization.propTypes = {
    children: PropTypes.element.isRequired
}

export default Deauthorization;