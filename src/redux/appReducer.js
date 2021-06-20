import {getAuthMeTC} from "./authReducer";

const CHANGE_THEME = "CHANGE_THEME";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false,
    theme: "light_theme",
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        case CHANGE_THEME:
            return {...state, theme: state.theme === "light_theme" ? "dark_theme" : "light_theme"};
        default:
            return state;
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const changeTheme = () => ({type: CHANGE_THEME});

export const initializeApp = () => (dispatch) => {
    const authMe = dispatch(getAuthMeTC());
    Promise.all([authMe]).then(() => dispatch(initializedSuccess()));
}

export default AppReducer;