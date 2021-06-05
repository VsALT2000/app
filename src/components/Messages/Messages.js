import classes from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import {Redirect, Route, Switch} from "react-router-dom";
import MessageConstructor from "./MessageConstructor/MessageConstructor";

const EmptyMessageWindow = () => {
    return (
        <div className={classes.emptyMessageWindow}>
            Choose the dialog.
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.dialog_items}>
                {props.dialogData.map(d => <Dialog data={d}/>)}
                <div className={classes.after}/>
            </div>
            <Switch>
                <Route exact path={"/messages/"} render={() => <EmptyMessageWindow/>}/>
                {
                    props.messageData.map((messageUser) =>
                        <Route exact path={`/messages/${messageUser.id}`}
                               render={() => <MessageConstructor addMess={props.addMess}
                                                                 messageUser={messageUser}/>}/>)

                }
                <Route path={"/"}>
                    <Redirect to={"/404"}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Messages;