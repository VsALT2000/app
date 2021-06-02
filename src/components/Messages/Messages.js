import classes from "./Messages.module.css";
import MessageConstructor from "./MessageConstructor/MessageConstructor";
import Dialog from "./Dialog/Dialog";
import {Route} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.dialog_items}>
                {props.state.dialogData.map(d => <Dialog data={d}/>)}
                <div className={classes.after}/>
            </div>
            {
                props.state.messageData.map((item) =>
                    <Route path={`/messages/${item.id}`}
                           render={() => <MessageConstructor state={item} store={props.store} dispatch={props.dispatch}/>}/>)
            }
        </div>
    );
}

export default Messages;