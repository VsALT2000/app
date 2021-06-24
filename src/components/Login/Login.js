import {connect} from "react-redux";
import {getAuthMeTC, getCaptchaTC, postAuthLoginTC} from "../../redux/authReducer";
import {compose} from "redux";
import classes from "./Login.module.css";
import withAuthRedirect from "../../hoc/AuthRedirect";
import React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
    componentDidMount() {
        this.props.getAuthMeTC();
    }

    onSubmit = (formData) => {
        console.log(formData);
        this.props.postAuthLoginTC(formData);
        this.props.getAuthMeTC();
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.pseudo}/>
                <div className={classes.container_login}>
                    <div className={classes.content}>
                        <h1>Sign In</h1>
                        <LoginForm onSubmit={this.onSubmit} captchaUrl={this.props.captchaUrl}
                                   getCaptchaTC={this.props.getCaptchaTC}/>
                    </div>
                </div>
                <div className={classes.pseudo}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login,
        id: state.auth.id,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default compose(connect(mapStateToProps, {getAuthMeTC, postAuthLoginTC, getCaptchaTC}),
    withAuthRedirect)(Login);