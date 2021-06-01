import classes from "./Message.module.css";

function Message(props) {
    return (
        <div className={classes.container}>
            <div>{props.message}</div>
        </div>
    );
}

export default Message;