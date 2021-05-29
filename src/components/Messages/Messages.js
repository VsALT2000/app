import classes from "./Messages.module.css";

function Messages() {
    return (
        <div className={classes.container}>
            <div className={classes.friends}>Friends</div>
            <div className={classes.dialogs}>Dialogs</div>
        </div>
    );
}

export default Messages;