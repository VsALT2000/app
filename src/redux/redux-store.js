import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import AppReducer from "./appReducer";
import UsersReducer from "./usersReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    profileData: ProfileReducer,
    messagesData: MessagesReducer,
    usersData: UsersReducer,
    app: AppReducer,
    auth: AuthReducer,
    form: formReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));