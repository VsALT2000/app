import classes from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import {Redirect, Route, Switch} from "react-router-dom";
import MessageConstructor from "./MessageConstructor/MessageConstructor";
import {compose} from "redux";
import {connect} from "react-redux";
import {addMess} from "../../redux/messagesReducer";
import withLoginRedirect from "../../hoc/LoginRedirect";

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
                {props.dialogData.map((d, i) => <Dialog key={i} data={d}/>)}
                <div className={classes.after}/>
            </div>
            <Switch>
                <Route exact path={"/messages/"} render={() => <EmptyMessageWindow/>}/>
                {
                    props.messageData.map((messageUser, i) =>
                        <Route key={i} exact path={`/messages/${messageUser.id}`}
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

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesData.dialogData,
        messageData: state.messagesData.messageData,
        isAuth: state.auth.isAuth,
    }
}

export default compose(connect(mapStateToProps, {addMess}), withLoginRedirect) (Messages);