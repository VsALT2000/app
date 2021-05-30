import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <NavLink className={classes.dialog} activeClassName={classes.active} to={`/messages/${props.data.id}`}>
            {props.data.name}
        </NavLink>
    );
}

export default Dialog;