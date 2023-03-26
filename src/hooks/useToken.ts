const useToken = () => {
    const updateToken = () => localStorage.getItem('access') || '';
    const getToken = () => localStorage.getItem('token') || '';
    const resetToken = () => localStorage.setItem('access', '');
    const resetUpdateToken = () => localStorage.setItem('token', '');
    const installUpdateToken = (access: string | null) => localStorage.setItem('access', access || '');
    const installToken = (token: string | null) => localStorage.setItem('token', token || '');
    return {updateToken, getToken, resetToken, resetUpdateToken, installUpdateToken, installToken}
}

export default useToken;
