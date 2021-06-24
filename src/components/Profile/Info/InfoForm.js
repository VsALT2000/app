import {Field, reduxForm} from "redux-form";
import classes from "./Info.module.css";
import React, {useEffect, useState} from "react";
import {requiredField} from "../../../utils/validators/validators";
import {Input} from "../../Common/FormsControls/FormsControls";

const InfoForm = (props) => {
    let editContacts;
    if (props.contacts)
        editContacts = Object.keys(props.contacts).map(key => {
            return <InfoField key={key} infoName={key} infoTitle={key} infoValue={props.contacts[key]}/>
        });

    return (
        <form onSubmit={props.handleSubmit}>
            <InfoField key={"fullName"} infoName={"fullName"} infoTitle={"Name"}
                       infoValue={props.fullName}/>
            <InfoField key={"aboutMe"} infoName={"aboutMe"} infoTitle={"About me"}
                       infoValue={props.aboutMe} validate={[requiredField]}/>
            <InfoField key={"lookingForAJobDescription"} infoName={"lookingForAJobDescription"}
                       infoTitle={"Looking for a job"} infoValue={props.lookingForAJobDescription}
                       validate={[requiredField]}/>
            <div>
                <span className={classes.show_contacts} onClick={props.toggleDisplayContacts}>
                    {props.displayContacts ? "Hide" : "Show"} contacts
                </span>
            </div>
            <div className={props.displayContactsClass}>
                {editContacts}
            </div>
            <div>
                <div className={classes.error_log}>{props.error}</div>
            </div>
            {
                props.isOwner
                    ? <button>Save</button>
                    : null
            }
        </form>
    )
}

const InfoField = ({infoTitle, infoName, infoValue, validate = []}) => {
    const [contact, setContact] = useState(infoValue);

    useEffect(() => {
        setContact(infoValue)
    }, [infoValue]);

    const changeContact = (e) => setContact(e.currentTarget.value);

    return (
        <div className={classes.info_block}>
            <div>{infoTitle}:</div>
            <Field component={Input} name={infoName} value={contact} className={classes.input_text}
                   onChange={changeContact} validate={validate}/>
        </div>
    )
}

export default reduxForm({form: "info"})(InfoForm);