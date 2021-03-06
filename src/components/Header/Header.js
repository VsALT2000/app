import {changeTheme} from "../../redux/appReducer";
import {connect} from "react-redux";
import React from "react";
import {deleteAuthLoginTC} from "../../redux/authReducer";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/avatar.png";

class Header extends React.Component {
    state = {
        exitMode: false,
        styleExitMode: null,
    }

    activateEditMode = () => this.setState({exitMode: true, styleExitMode: classes.exit_mode});

    deactivateEditMode = () => this.setState({exitMode: false, styleExitMode: null});

    onChangeTheme = () => this.props.changeTheme();

    onExit = () => this.props.deleteAuthLoginTC();

    render() {
        return (
            <header className={classes.header}>
                <div className={classes.container_logo}>
                    <button className={classes.button} onClick={this.onChangeTheme}>
                        <img className={classes.logo} src={logo} alt={"logo"}/>
                    </button>
                </div>
                <div className={classes.container}>
                    <div className={classes.container_name}>
                        <span className={classes.app_name}>PORTAL</span>
                    </div>
                    <div className={`${classes.container_auth} ${this.state.styleExitMode}`}>
                        <button onClick={this.activateEditMode} onBlur={this.deactivateEditMode}>
                            <div className={classes.content}>
                                {
                                    this.props.isAuth
                                        ? <div> {this.props.login} </div>
                                        : <NavLink to={"/login"}>Login</NavLink>
                                }
                                <div className={classes.avatar}>
                                    <img className={classes.image} src={this.props.avatar || avatar} alt={"avatar"}/>
                                </div>
                            </div>
                            {
                                this.state.exitMode && this.props.isAuth
                                    ? <div className={classes.exit_container}>
                                        <div onClick={this.onExit}>
                                            Exit
                                        </div>
                                    </div>
                                    : null
                            }
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        theme: state.app.theme,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.photos.small,
    }
}


export default connect(mapStateToProps, {changeTheme, deleteAuthLoginTC})(Header);