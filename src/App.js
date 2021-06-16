import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import React from "react";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        let theme = this.props.theme === "light_theme" ? classes.light_theme : classes.dark_theme;
        return (
            <Switch>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route exact path={"/"}>
                    <Redirect to={"/login"}/>
                </Route>
                <Route path={"/"}>
                    <div className={`${theme} ${classes.app_wrapper}`}>
                        <HeaderContainer/>
                        <div className={classes.body}>
                            <Navigation id={this.props.id}/>
                            <div className={classes.content}>
                                <Switch>
                                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                                    <Route exact path={"/profile"}>
                                        <Redirect to={"/login"}/>
                                    </Route>
                                    <Route path={"/profile/null"}>
                                        <Redirect to={"/login"}/>
                                    </Route>
                                    <Route path={"/messages"} render={() => <MessagesContainer/>}/>
                                    <Route exact path={"/users"} render={() => <UsersContainer/>}/>
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
        initialized: state.app.initialized,
        theme: state.app.theme,
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login,
        id: state.auth.id,
    }
}

export default connect(mapStateToProps, {initializeApp})(App);
