import {useSelector} from "react-redux";

const useAuthorization =() => {
    const user = useSelector(state => state.userReducer)
    console.log(user)
    return {name: user.name, email: user.email, isAuth: !!user.email}
}

export default useAuthorization