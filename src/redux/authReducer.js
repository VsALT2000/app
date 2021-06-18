import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_PROFILE_DATA = "auth/SET_PROFILE_DATA";

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

export const getAuthMeTC = () =>
    async (dispatch) => {
        const data = await authAPI.getAuthMe()
        if (data.resultCode === 0) {
            profileAPI.getProfile(data.data.id).then(profileData => {
                dispatch(setProfileData(profileData));
            });
            dispatch(setUserData(data.data, true));
        }
    }

export const postAuthLoginTC = (formData) =>
    async (dispatch) => {
        const data = await authAPI.postAuthLogin(formData)
        if (data.resultCode === 0)
            dispatch(getAuthMeTC());
        else
            dispatch(stopSubmit("login", {_error: data.messages}));
    }

export const deleteAuthLoginTC = () =>
    async (dispatch) => {
        const data = await authAPI.deleteAuthLogin()
        if (data.resultCode === 0)
            dispatch(setUserData({id: null, email: null, login: null}, false));
    }

export default AuthReducer;