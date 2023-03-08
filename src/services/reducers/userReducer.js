import {
    ASSIGN_USER,
    COMPLETED_DOWNLOAD_USER,
    ERROR_LOADING_USER,
    LOGOUT_USER,
    START_LOADING_USER
} from "../actions/userActions";

const defaultState = {
    name: null,
    email: null,
    loading: false,
    completed: false,
    error: false,
    errorMassage: null
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ASSIGN_USER:
            return {name: action.payload.name, email: action.payload.email, loading: false, completed: true, error: false, errorMassage: null}
        case START_LOADING_USER:
            return {name: null, email: null,loading: true, completed: false, error: false, errorMessage: null}
        case COMPLETED_DOWNLOAD_USER:
            return {name: action.payload.name, email: action.payload.email ,loading: false, completed: true, error: false, errorMessage: null}
        case ERROR_LOADING_USER:
            return {name: null, email: null,loading: false, completed: false, error: true, errorMessage: action.payload}
        case LOGOUT_USER:
            return  {name: null, email: null}
        default:
            return state
    }
}

export default userReducer;