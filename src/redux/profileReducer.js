import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    photos: {
        small: null,
        large: null
    },



    userId: 17524,
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

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [...state.postsData, {text: action.text, countLikes: 0}]};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_PROFILE:
            return {...state, ...action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export const addPost = (text) => ({type: ADD_POST, text: text});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const setProfileTC = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(id).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setProfile(data));
        });
    }
}

export const getProfileStatusTC = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(data => {
            dispatch(setStatus(data));
        });
    }
}

export const setProfileStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.putStatus(status).then(data => {
            if (data.resultCode === 0)
                dispatch(setStatus(status));
        });
    }
}

export default ProfileReducer;