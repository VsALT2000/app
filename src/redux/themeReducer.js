const CHANGE_THEME = "CHANGE-THEME";

const initialState = {
    theme: "light_theme"
}

const ThemeReducer = (state = initialState, action) => {
    if (action.type === CHANGE_THEME) {
        state.theme = state.theme === "light_theme" ? "dark_theme" : "light_theme";
    }

    return state;
}

export const changeThemeActionCreator = () => ({type: CHANGE_THEME});

export default ThemeReducer;