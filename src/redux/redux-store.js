import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import ThemeReducer from "./themeReducer";

const reducers = combineReducers({
    profileData: ProfileReducer,
    messagesData: MessagesReducer,
    theme: ThemeReducer,
});

let store = createStore(reducers);

export default store;