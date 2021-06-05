const CHANGE_THEME = "CHANGE-THEME";

const initialState = {
    theme: "light_theme"
}

const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme: state.theme === "light_theme" ? "dark_theme" : "light_theme"
            };
        default:
            return state;
    }
}

export const changeTheme = () => ({type: CHANGE_THEME});

export default ThemeReducer;