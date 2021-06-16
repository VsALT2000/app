import classes from "./Login.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthTC, requiredField} from "../../utils/validators/validators";
import {CheckboxTC, Input} from "../Common/FormsControls/FormsControls";

const maxLength30 = maxLengthTC(30);

const LoginForm = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} className={classes.input_text} placeholder={"Login"}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} type={"password"} className={classes.input_text}
                       placeholder={"Password"} validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <Field component={CheckboxTC("rememberMe", "remember me")} name={"rememberMe"} type={"checkbox"}/>
            </div>
            <div className={classes.SummaryError}>
                <div className={classes.error_log}>{props.error}</div>
            </div>
            <div className={classes.button}>
                <button>Sign In</button>
            </div>
        </form>
    );
}

export default reduxForm({ form: "login" })(LoginForm);