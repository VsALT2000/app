import classes from "./AboutMe.module.css";
import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfileStatusTC, setProfileStatusTC} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";

const AboutMe = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const changeStatus = (e) => setStatus(e.currentTarget.value)

    const activateEditMode = () => {
        if (props.userId === props.myId)
            setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.setProfileStatusTC(status);
    }

    return (
        <div className={classes.about_me}>
            <div className={classes.content}>About me:</div>
            {
                editMode &&
                <div className={classes.textarea_container}>
                        <textarea className={classes.textarea} onBlur={deactivateEditMode} onChange={changeStatus}
                                  autoFocus={true} onSelect={true} value={status} rows={"1"}/>
                </div>
            }
            {
                !editMode &&
                <div className={classes.text} onClick={activateEditMode}>
                    {props.status || "Change status"}
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.profileData.userId,
        myId: state.auth.id,
        status: state.profileData.status,
    }
}

export default compose(connect(mapStateToProps, {
    getProfileStatusTC,
    setProfileStatusTC
}), withRouter)(AboutMe)
