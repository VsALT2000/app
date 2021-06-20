import classes from "./MessageConstructor.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form className={classes.new_message} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageBody"}
                   className={classes.textarea} placeholder={"Type you message..."}/>
            <div className={classes.button_container}>
                <button className={classes.send_button}>Send</button>
            </div>
        </form>
    );
}

export default reduxForm({ form: "dialogAddMessageForm" }) (AddMessageForm);