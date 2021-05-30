import classes from "./Message.module.css";

function Message(props) {
    return (
        <div className={classes.container}>
            {props.message}
        </div>
    );
}

export default Message;