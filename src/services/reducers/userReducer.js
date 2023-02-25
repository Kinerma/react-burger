import {ASSIGN_USER, LOGOUT_USER} from "../actions/userActions";

const defaultState = {
    name: null,
    email: null
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ASSIGN_USER:
            return {name: action.payload.name, email: action.payload.email}
        case LOGOUT_USER:
            return  {name: null, email: null}
        default:
            return state
    }
}

export default userReducer;