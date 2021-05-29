import classes from "./Messages.module.css";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

function MessagesCase1() {
    return (
        <div className={classes.messages_items}>
            <Message message={"Hi."}/>
            <Message message={"What's up?"}/>
        </div>
    );
}

function MessagesCase2() {
    return (
        <div className={classes.messages_items}>
            <Message message={"Nothing is here."}/>
        </div>
    );
}

function MessagesCase3() {
    return (
        <div className={classes.messages_items}>
            <Message message={"Here too."}/>
        </div>
    );
}

function Messages() {
    return (
        <div className={classes.container}>
            <div className={classes.dialog_items}>
                <Dialog dialogName={"VsALT"} id={"1"}/>
                <Dialog dialogName={"ALT2000"} id={"2"}/>
                <Dialog dialogName={"VsALT2000"} id={"3"}/>
                <div className={classes.after}/>
            </div>
            <Route path={"/messages/1"} component={MessagesCase1}/>
            <Route path={"/messages/2"} component={MessagesCase2}/>
            <Route path={"/messages/3"} component={MessagesCase3}/>
        </div>
    );
}

export default Messages;