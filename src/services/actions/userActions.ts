export enum UserActions {
    ASSIGN_USER = 'ASSIGN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    START_LOADING_USER = 'START_LOADING_USER',
    COMPLETED_DOWNLOAD_USER = 'COMPLETED_DOWNLOAD_USER',
    ERROR_LOADING_USER = 'ERROR_LOADING_USER',
}

interface IAssignUser {
    type: UserActions.ASSIGN_USER;
    payload: {email: string, name: string};
}
interface ILogoutUser {
    type: UserActions.LOGOUT_USER;
}
interface IStartLoadingUser {
    type: UserActions.START_LOADING_USER;
}
interface ICompletedDownloadUser {
    type: UserActions.COMPLETED_DOWNLOAD_USER;
    payload: {email: string, name: string};
}
interface IFailLoadingUser {
    type: UserActions.ERROR_LOADING_USER;
    payload: string;
}
export type TUserAction = IAssignUser | ILogoutUser | IStartLoadingUser | ICompletedDownloadUser | IFailLoadingUser

export const assignUser = ({email, name}:{email: string, name: string}):TUserAction => ({type: UserActions.ASSIGN_USER, payload: {email, name}})
export const logoutUser = ():TUserAction => ({type: UserActions.LOGOUT_USER})
export const startLoadingUser = ():TUserAction => ({type: UserActions.START_LOADING_USER})
export const completedDownloadUser = ({email,name}:{email: string, name: string}):TUserAction => ({type: UserActions.COMPLETED_DOWNLOAD_USER ,payload: {email,name}})
export const failLoadingUser = (errorMessage:string):TUserAction => ({type: UserActions.ERROR_LOADING_USER ,payload: errorMessage})
