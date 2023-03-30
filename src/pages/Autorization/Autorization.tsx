import useAuthorization from "../../hooks/useAuthorization";
import {Navigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {ReactElement, ReactNode, FC} from "react";

interface IProps {
    children: ReactNode
}

const Autorization:FC<IProps> = ({children}) => {
    const {isAuth, completed, error} = useAuthorization()
    if (!completed && error) {
        return (
            <Navigate to={'/login'} />
        )
    }
    if (completed) {
        return (
            isAuth ? children as ReactElement : <Navigate to={'/login'} />
        )
    }
        return (
            <Loader />
        )
}

export default Autorization;