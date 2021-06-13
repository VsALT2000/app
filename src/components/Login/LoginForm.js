import classes from "./Login.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"email"} className={classes.input_text} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} type={"password"} className={classes.input_text} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div className={classes.button}>
                <button>Sign In</button>
            </div>
        </form>
    );
}

export default reduxForm({ form: "login" })(LoginForm);