import classes from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";
import MessageConstructor from "./MessageConstructor/MessageConstructor";

const Messages = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.dialog_items}>
                {props.dialogData.map(d => <Dialog data={d}/>)}
                <div className={classes.after}/>
            </div>
            {
                props.messageData.map((messageUser) =>
                    <Route path={`/messages/${messageUser.id}`}
                           render={() => <MessageConstructor addMess={props.addMess} messageUser={messageUser}/>}/>)
            }
        </div>
    );
}

export default Messages;