import Api from '../Api/api';
import {IUserAuth} from '../utils/interface'
import useToken from "./useToken";


const useController = () => {
    const tokenStorage = useToken()
    const refreshToken = () => Api.renewToken(tokenStorage.updateToken())
        .then(data => {
            const {user, accessToken, refreshToken} = data
            tokenStorage.installUpdateToken(refreshToken)
            tokenStorage.installToken(accessToken)
            return user
        })
        .catch((err) => {
            tokenStorage.installToken(null)
            tokenStorage.installUpdateToken(null)
            return Promise.reject(err)
        })
    const expiresToken = (error: any) => error.then((error: {message: string | string[] }) => {
        if (error.message.includes('jwt expired')) {
            return refreshToken()
        }
        return Promise.reject(error)
    })
    const getUser = () => Api.getUser(tokenStorage.getToken()).then(data => data.user).catch((err) => expiresToken(err).then(() => getUser()))
    const checkAuthorization = () => getUser()
    const login = (email: string, password: string) => Api.login(email, password).then(data => {
        const {user, accessToken, refreshToken} = data
        tokenStorage.installUpdateToken(refreshToken)
        tokenStorage.installToken(accessToken)
        return user
    })
    const logout = () => Api.logout(tokenStorage.updateToken())
        .then(() => {
            tokenStorage.installToken(null)
            tokenStorage.installUpdateToken(null)
            return null
        })
    const registration = (name: string, email: string, password: string) => Api.registrationUser(name, email, password)
        .then(data => {
            const {user, accessToken, refreshToken} = data
            tokenStorage.installUpdateToken(refreshToken)
            tokenStorage.installToken(accessToken)
            return user
        })
    const reset = (email: string) => Api.reset(email)
    const resetAccept = (password: string, code: string) => Api.resetAccept(password, code)
    const updateProfile = (email: string, password: string | null, name: string): Promise<IUserAuth> => {
        const userInfo: IUserAuth = {name, email}
        if (password){
            userInfo.password = password
        }
        return Api.updateUser(userInfo, tokenStorage.getToken()).then(data => data.user).catch((err) => expiresToken(err).then(() => updateProfile(email, password, name)))
    }
    return {checkAuthorization, login, logout, registration, reset, resetAccept, getUser, updateProfile}
}

export default useController;
