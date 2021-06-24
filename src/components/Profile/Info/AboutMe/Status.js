import classes from "./Status.module.css";
import React, {useEffect, useState} from "react";

const Status = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const changeStatus = (e) => setStatus(e.currentTarget.value)

    const activateEditMode = () => {
        if (props.isOwner)
            setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.setProfileStatusTC(status);
    }

    return (
        <div className={classes.status}>
            {
                editMode
                    ? <div className={classes.textarea_container}>
                        <textarea className={classes.textarea} onBlur={deactivateEditMode} onChange={changeStatus}
                                  autoFocus={true} onSelect={true} value={status} rows={"1"}/>
                    </div>
                    : <div className={classes.text} onClick={activateEditMode}>
                        <span>{props.status || "Change status"}</span>
                    </div>
            }
        </div>
    )
}

export default Status;
