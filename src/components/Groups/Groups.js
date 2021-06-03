import classes from "./Groups.module.css";

function Groups() {
    return (
        <div className={classes.container}>
            <div className={classes.friends}>Friends</div>
            <div>Dialogs</div>
        </div>
    );
}

export default Groups;