import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};
        default: return state;
    }
}

const setUserData = (data) => ({type: SET_USER_DATA, data});

export const getAuthMeTC = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));
            }
        });
    }
}

export default AuthReducer;