import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {Route, Switch} from "react-router-dom";
/*import Music from "./components/Music/Music";*/
import HeaderContainer from "./components/Header/HeaderContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NotFound from "./components/NotFound/NotFound";

const App = (props) => {
    let temp = props.state.theme.theme === "light_theme" ? classes.light_theme : classes.dark_theme;
    return (
        <div className={`${temp} ${classes.app_wrapper}`}>
            <HeaderContainer/>
            <div className={classes.body}>
                <Navigation/>
                <div className={classes.content}>
                    <Switch>
                        <Route path={"/profile"} render={() => <Profile avatar={props.state.profileData.avatar}/>}/>
                        <Route path={"/messages"} render={() => <MessagesContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        {/*<Route path={"/music/"} render={() => <Music/>}/>*/}

                        <Route exact path={"/"} render={() => <Profile avatar={props.state.profileData.avatar}/>}/>
                        <Route path={"/"} component={NotFound}/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
