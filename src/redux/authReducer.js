import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GETTING_DATA_IN_PROGRESS = "GETTING_DATA_IN_PROGRESS";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

    gettingData: false,
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};
        case GETTING_DATA_IN_PROGRESS:
            return {...state, gettingData: action.inProgress};
        default: return state;
    }
}

const setUserData = (data) => ({type: SET_USER_DATA, data});
const gettingDataInProgress = (inProgress) => ({type: GETTING_DATA_IN_PROGRESS, inProgress});

export const getAuthMeTC = () => {
    return async (dispatch) => {
        dispatch(gettingDataInProgress(true));
        await authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));
                dispatch(gettingDataInProgress(false));
            }
        });
    }
}

export const postAuthLoginTC = (formData) => {
    return (dispatch) => {
        authAPI.postAuthLogin(formData).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData({id: data.data.userId}));
            }
        });
    }
}

export const deleteAuthLoginTC = () => {
    return (dispatch) => {
        authAPI.deleteAuthLogin().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));
            }
        });
    }
}

export default AuthReducer;