import classes from "./Groups.module.css";

function Groups() {
    return (
        <div className={classes.container}>
            <div className={classes.friends}>Friends</div>
            <div className={classes.dialogs}>Dialogs</div>
        </div>
    );
}

export default Groups;