import {TUserAction, UserActions} from "../actions/userActions";

export interface IUserReducerState {
    name : string | null;
    email: string | null;
    loading: boolean;
    completed: boolean;
    error: boolean;
    errorMessage: string | null
}

const defaultState:IUserReducerState = {
    name: null,
    email: null,
    loading: false,
    completed: false,
    error: false,
    errorMessage: null
}

const userReducer = (state = defaultState, action:TUserAction):IUserReducerState => {
    switch (action.type) {
        case UserActions.ASSIGN_USER:
            return {name: action.payload.name, email: action.payload.email, loading: false, completed: true, error: false, errorMessage: null}
        case UserActions.START_LOADING_USER:
            return {name: null, email: null,loading: true, completed: false, error: false, errorMessage: null}
        case UserActions.COMPLETED_DOWNLOAD_USER:
            return {name: action.payload.name, email: action.payload.email ,loading: false, completed: true, error: false, errorMessage: null}
        case UserActions.ERROR_LOADING_USER:
            return {name: null, email: null,loading: false, completed: false, error: true, errorMessage: action.payload}
        case UserActions.LOGOUT_USER:
            return {name: null, email: null, loading: false, completed: false, error: false, errorMessage: null}
        default:
            return state
    }
}

export default userReducer;