export const ASSIGN_USER = 'ASSIGN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const START_LOADING_USER = 'START_LOADING_USER'
export const COMPLETED_DOWNLOAD_USER = 'DOWNLOAD_COMPLETED_USER'
export const ERROR_LOADING_USER = 'ERROR_LOADING_USER'

export const assignUser = ({email, name}) => ({type: ASSIGN_USER, payload: {email, name}})
export const logoutUser = () => ({type: LOGOUT_USER})
export const startLoadingUser = () => ({type: START_LOADING_USER })
export const completedDownloadUser = ({email,name}) => ({type: COMPLETED_DOWNLOAD_USER ,payload: {email,name}})
export const failLoadingUser = (errorMessage) => ({type: ASSIGN_USER ,payload: errorMessage})
