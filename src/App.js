import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Groups from "./components/Groups/Groups";
import Music from "./components/Music/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = (props) => {
    let temp = props.state.theme.theme === "light_theme" ? classes.light_theme : classes.dark_theme;
    return (
        <BrowserRouter>
            <div className={`${temp} ${classes.app_wrapper}`}>
                <HeaderContainer/>
                <div className={classes.body}>
                    <Navigation/>
                    <div className={classes.content}>
                        <Route path={"/profile"} render={() => <Profile avatar={props.state.profileData.avatar}/>}/>
                        <Route path={"/messages"} render={() => <MessagesContainer store={props.store}
                                                                          dispatch={props.dispatch}
                                                                          state={props.state.messagesData}/>}/>
                        <Route path={"/groups"} render={() => <Groups/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
