import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Redirect, Route, Switch} from "react-router-dom";
/*import Music from "./components/Music/Music";*/
import HeaderContainer from "./components/Header/HeaderContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthMeTC} from "./redux/authReducer";
import React from "react";

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthMeTC();
    }

    render() {
        let theme = this.props.theme === "light_theme" ? classes.light_theme : classes.dark_theme;
        return (
            <Switch>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route exact path={"/"}>
                    <Redirect to={"/users"}/>
                </Route>
                <Route path={"/"}>
                    <div className={`${theme} ${classes.app_wrapper}`}>
                        <HeaderContainer/>
                        <div className={classes.body}>
                            <Navigation/>
                            <div className={classes.content}>
                                <Switch>
                                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                                    <Route path={"/messages"} render={() => <MessagesContainer/>}/>
                                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                                    <Route path={"/404"} render={() => <NotFound/>}/>
                                    {/*<Route path={"/music/"} render={() => <Music/>}/>*/}

                                    <Route path={"/"}>
                                        <Redirect to={"/404"}/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </Route>
            </Switch>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login,
        id: state.auth.id,
    }
}

export default connect(mapStateToProps, {getAuthMeTC})(App);
