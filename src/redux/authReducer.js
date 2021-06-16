import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_PROFILE_DATA = "GETTING_DATA_IN_PROGRESS";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

    photos: {
        small: null,
        large: null
    },
    isFetching: false,
    status: "",
    postsData:
        [
            {
                text: "Estás usando este software de traducción de forma incorrecta. Por favor, consulta el manual.",
                countLikes: 500000
            },
            {
                text: "So that's just what I was doing. I was just reading... ah... books. So I'm not a moron. " +
                    "Anyway. Just finished the last one. The hardest one. Machiavelli. Do not know what all the " +
                    "fuss was about. Understood it perfectly. Have you read that one?",
                countLikes: 37
            },
        ]
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: action.isAuth};
        case SET_PROFILE_DATA:
            return {...state, ...action.data};
        default:
            return state;
    }
}

const setUserData = (data, isAuth) => ({type: SET_USER_DATA, data, isAuth});
const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});

export const getAuthMeTC = () => {
    return async (dispatch) => {
        await authAPI.getAuthMe().then(authData => {
            if (authData.resultCode === 0) {
                profileAPI.getProfile(authData.data.id).then(profileData => {
                    dispatch(setProfileData(profileData));
                });
                dispatch(setUserData(authData.data, true));
            }
        });
    }
}

export const postAuthLoginTC = (formData) => {
    return async (dispatch) => {
        await authAPI.postAuthLogin(formData).then(data => {
            if (data.resultCode === 0) {
                authAPI.getAuthMe().then(authData => {
                    if (authData.resultCode === 0) {
                        profileAPI.getProfile(authData.data.id).then(profileData => {
                            dispatch(setProfileData(profileData));
                        });
                        dispatch(setUserData(authData.data, true));
                    }
                });
            } else {
                dispatch(stopSubmit("login", {_error: data.messages}));
            }
        });
    }
}

export const deleteAuthLoginTC = () => {
    return (dispatch) => {
        authAPI.deleteAuthLogin().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData({id: null, email: null, login: null}, false));
            }
        });
    }
}

export default AuthReducer;