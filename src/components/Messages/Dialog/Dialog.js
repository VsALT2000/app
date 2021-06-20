import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <NavLink className={classes.dialog} activeClassName={classes.active} to={`/messages/${props.data.id}`}>
            <div className={`${classes.avatar} ${classes.dialog_avatar}`}>
                <img className={classes.image} src={props.data.avatar} alt={"avatar"}/>
            </div>
            <div className={classes.dialogName_container}>
                <div className={classes.dialogName}>
                    {props.data.name}
                </div>
            </div>
        </NavLink>
    );
}

export default Dialog;