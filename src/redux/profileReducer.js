const ADD_POST = "ADD_POST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_PROFILE = "SET_PROFILE";
const SET_PHOTOS = "SET_PHOTOS";

let initialState = {
    photos: {
        small: null,
        large: null
    },
    userId: 2, //17524,
    isFetching: true,
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
        case SET_PHOTOS:
            return {...state, photos: {large: action.large, small: action.small}};
        default:
            return state;
    }
}

export const addPost = (text) => ({type: ADD_POST, text: text});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setPhotos = (large, small) => ({type: SET_PHOTOS, large, small});

export default ProfileReducer;