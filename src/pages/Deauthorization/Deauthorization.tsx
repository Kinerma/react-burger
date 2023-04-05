import useAuthorization from "../../hooks/useAuthorization";
import {Navigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {ReactElement, ReactNode, FC} from "react";

interface IProps {
    children: ReactNode
}

const Deauthorization:FC<IProps> = ({children}) => {
    const {isAuth, completed, error} = useAuthorization()
    if (!completed && error) {
        return (
            children as ReactElement
        )
    }
    if (completed) {
        return(
            !isAuth ? children as ReactElement : <Navigate to={'/'} />
        )
    }
        return (
            <Loader />
        )
}



export default Deauthorization;