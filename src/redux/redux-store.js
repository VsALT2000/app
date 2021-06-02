import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";

const reducers = combineReducers({
    profileData: ProfileReducer,
    messagesData: MessagesReducer,
});

let store = createStore(reducers);

export default store;