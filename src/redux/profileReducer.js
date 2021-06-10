import {profileAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_PROFILE = "SET_PROFILE";

let initialState = {
    photos: {
        small: null,
        large: null
    },
    userId: 2, //17524,
    isFetching: false,
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
            return {...action.profile, isFetching: state.isFetching, postsData: state.postsData};
        default:
            return state;
    }
}

export const addPost = (text) => ({type: ADD_POST, text: text});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const setProfileTC = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(id).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setProfile(data));
        });
    }
}

export default ProfileReducer;