import { CREATE_USER, GET_USERS, GET_USER, IS_LOADING, UPDATE_USER, DELETE_USER } from "../Constants/Action-Types";

const initialState = {
    users: [],
    user: {},
    isLoading: false,
    isEdit: false
}

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_USER:
            return state
            break;
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                isEdit: false,
                user: {}
            }
            break;
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isEdit: true
            }
            break;
        case UPDATE_USER:
            return {
                ...state,
                isEdit: false
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
            break;
        case DELETE_USER:
            return state
        default:
            return state;
    }
}

export default UserReducer;