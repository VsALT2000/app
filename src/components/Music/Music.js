import classes from "./Music.module.css";

function Music() {
    return (
        <div className={classes.container}>
            <div className={classes.friends}>Friends</div>
            <div className={classes.dialogs}>Dialogs</div>
        </div>
    );
}

export default Music;