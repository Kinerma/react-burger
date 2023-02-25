const useToken = () => {
    const updateToken = () => localStorage.getItem('access')
    const getToken = () => localStorage.getItem('token')
    const resetToken = () => localStorage.setItem('access', null)
    const resetUpdateToken = () => localStorage.setItem('token', null)
    const installUpdateToken = (access) => localStorage.setItem('access', access)
    const installToken = (token) => localStorage.setItem('token', token)
    return {updateToken, getToken, resetToken, resetUpdateToken, installUpdateToken, installToken}
}

export default useToken;
