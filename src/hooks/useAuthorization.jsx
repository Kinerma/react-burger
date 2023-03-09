import {useSelector} from "react-redux";

const useAuthorization =() => {
    const user = useSelector(state => state.userReducer)
    return {name: user.name, email: user.email, isAuth: !!user.email, completed: user.completed, loading: user.loading, error: user.error}
}

export default useAuthorization