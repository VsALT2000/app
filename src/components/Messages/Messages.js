import classes from "./Messages.module.css";
import MessageConstructor from "./MessageConstructor/MessageConstructor";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

function Messages(props) {
    return (
        <div className={classes.container}>
            <div className={classes.dialog_items}>
                {props.store.state.messagesData.dialogData.map(d => <Dialog data={d}/>)}
                <div className={classes.after}/>
            </div>
            {
                props.store.state.messagesData.messageData.map((item) =>
                    <Route path={`/messages/${item.id}`}
                           render={() => <MessageConstructor data={item} store={props.store}/>}/>)
            }
        </div>
    );
}

export default Messages;