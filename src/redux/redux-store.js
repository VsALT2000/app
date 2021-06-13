import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import ThemeReducer from "./themeReducer";
import UsersReducer from "./usersReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    profileData: ProfileReducer,
    messagesData: MessagesReducer,
    usersData: UsersReducer,
    theme: ThemeReducer,
    auth: AuthReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;