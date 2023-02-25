export const ASSIGN_USER = 'ASSIGN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const assignUser = ({email, name}) => ({type: ASSIGN_USER, payload: {email, name}})
export const logoutUser = () => ({type: LOGOUT_USER})