import classes from "./MyPosts.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form className={classes.new_post} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostBody"}
                   className={classes.textarea} placeholder={"Type you message..."}/>
            <div className={classes.button_container}>
                <button className={classes.send_button}>Send</button>
            </div>
        </form>
    );
}

export default reduxForm({form: "profileAddMessageForm"})(AddPostForm);