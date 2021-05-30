import classes from "./Messages.module.css";
import MessageConstructor from "./MessageConstructor/MessageConstructor";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

function Messages(props) {
    return (
        <div className={classes.container}>
            <div className={classes.dialog_items}>
                {props.data.dialogData.map(d => <Dialog data={d}/>)}
                <div className={classes.after}/>
            </div>
            {
                props.data.messageData.map((item) =>
                    <Route path={`/messages/${item.id}`} render={() => <MessageConstructor data={item.messages}/>}/>)
            }
        </div>
    );
}

export default Messages;