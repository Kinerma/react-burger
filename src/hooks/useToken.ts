const useToken = {
    updateToken: () => localStorage.getItem('access') || '',
    getToken: () => localStorage.getItem('token') || '',
    resetToken: () => localStorage.setItem('access', ''),
    resetUpdateToken: () => localStorage.setItem('token', ''),
    installUpdateToken: (access: string | null) => localStorage.setItem('access', access || ''),
    installToken: (token: string | null) => localStorage.setItem('token', token || '')
}

export default useToken;
