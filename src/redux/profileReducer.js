import {profileAPI} from "../api/api";
import {setAuthPhoto} from "./authReducer";
import {stopSubmit} from "redux-form";

const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const TOGGLE_IS_FETCHING = "profile/TOGGLE_IS_FETCHING";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTO = "profile/SET_PHOTO";

let initialState = {
    photos: {
        small: null,
        large: null
    },
    userId: null,
    isFetching: false,
    status: "",
    totalCountPosts: 2,
    postsData:
        [
            {
                postId: 1,
                text: "Estás usando este software de traducción de forma incorrecta. Por favor, consulta el manual.",
                countLikes: 500000,
                isLiking: false,
            },
            {
                postId: 2,
                text: "So that's just what I was doing. I was just reading... ah... books. So I'm not a moron. " +
                    "Anyway. Just finished the last one. The hardest one. Machiavelli. Do not know what all the " +
                    "fuss was about. Understood it perfectly. Have you read that one?",
                countLikes: 37,
                isLiking: true,
            },
        ]
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, totalCountPosts: state.totalCountPosts + 1,
                postsData: [...state.postsData, {
                    postId: state.totalCountPosts + 1,
                    text: action.text,
                    countLikes: 0,
                    isLiking: false
                }]
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => {
                    if (p.postId !== action.postId) return p;
                })
            };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_PROFILE:
            return {...state, ...action.profile, contacts: {...action.profile.contacts}};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_PHOTO:
            return {...state, photos: action.photos};
        default:
            return state;
    }
}

export const addPost = (text) => ({type: ADD_POST, text});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const setPhoto = (photos) => ({type: SET_PHOTO, photos});

export const getProfileTC = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await profileAPI.getProfile(id)
    dispatch(toggleIsFetching(false));
    dispatch(setProfile(data));
}

export const getProfileStatusTC = (id) => async (dispatch) => {
    const data = await profileAPI.getStatus(id)
    dispatch(setStatus(data));
}

export const setProfileStatusTC = (status) => async (dispatch) => {
    const data = await profileAPI.putStatus(status)
    if (data.resultCode === 0)
        dispatch(setStatus(status));
}

export const setProfilePhotoTC = (photo) => async (dispatch) => {
    const data = await profileAPI.putPhoto(photo);
    if (data.resultCode === 0)
        dispatch(setPhoto(data.data.photos));
        dispatch(setAuthPhoto(data.data.photos));
}

export const setProfileInfoTC = (profile) => async (dispatch) => {
    const data = await profileAPI.putProfile(profile);

    if (data.resultCode === 0) {
        dispatch(setProfile(profile));
    } else {
        dispatch(stopSubmit("info", {_error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}

export default ProfileReducer;