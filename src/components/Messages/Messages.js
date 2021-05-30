import classes from "./Messages.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

function MessagesCase(props) {
    return (
        <div className={classes.messages_items}>
            {props.data.map(m => <Message message={m}/>)}
        </div>
    );
}

function Messages(props) {
    return (
        <div className={classes.container}>
            <div className={classes.dialog_items}>
                {props.data.dialogData.map(d => <Dialog data={d}/>)}
                <div className={classes.after}/>
            </div>
            {
                props.data.messageData.map((item, index) =>
                <Route path={`/messages/${index}`} render={() => <MessagesCase data={item}/>}/>)
            }
        </div>
    );
}

export default Messages;