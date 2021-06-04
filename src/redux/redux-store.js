import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import ThemeReducer from "./themeReducer";
import UsersReducer from "./usersReducer";

const reducers = combineReducers({
    profileData: ProfileReducer,
    messagesData: MessagesReducer,
    usersData: UsersReducer,
    theme: ThemeReducer,
});

let store = createStore(reducers);

export default store;