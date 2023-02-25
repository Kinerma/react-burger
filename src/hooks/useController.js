import useToken from "./useToken";
import Api from '../Api/api';


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
    const expiresToken = error => error.then(error => error.message.includes('jwt expired') ? refreshToken() : Promise.reject(error))
    const getUser = () => Api.getUser(tokenStorage.getToken()).then(data => data.user).catch((err) => expiresToken(err).then(() => getUser()))
    const checkAuthorization = () => getUser()
    const login = (email, password) => Api.login(email, password).then(data => {
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
    const registration = (name, email, password) => Api.registrationUser(name, email, password)
        .then(data => {
            const {user, accessToken, refreshToken} = data
            tokenStorage.installUpdateToken(refreshToken)
            tokenStorage.installToken(accessToken)
            return user
        })
    const reset = (email) => Api.reset(email)
    const resetAccept = (password, code) => Api.resetAccept(password, code)
    const updateProfile = (email, password, name) => {
        const userInfo = {email, name}
        // eslint-disable-next-line no-unused-expressions
        password !== "" ? userInfo.password = password : false
        return Api.updateUser(userInfo, tokenStorage.getToken()).then(data => data.user).catch((err) => expiresToken(err).then(() => updateProfile(email, password, name)))
    }
    return {checkAuthorization, login, logout, registration, reset, resetAccept, getUser, updateProfile}
}

export default useController;
