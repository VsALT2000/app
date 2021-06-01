import classes from "./MessageConstructor.module.css";
import Message from "./Message/Message";
import React from "react";
import {addMessActionCreator} from "../../../redux/state";

function MessageConstructor(props) {
    let newMess = React.createRef();
    let addMess = () => {
        let text = newMess.current.value;
        props.store.dispatch(addMessActionCreator(props.data.id, text));
        newMess.current.value = "";
    }

    return (
        <div className={classes.messages}>
            <div className={classes.messages_items}>
                {props.data.messages.map(m => {
                    if (m.isYouMess) {
                        return (
                            <div className={classes.you_message}>
                                <Message message={m.text}/>
                                <div className={classes.after}/>
                            </div>
                        )
                    } else {
                        return (
                            <div className={classes.friend_message}>
                                <Message message={m.text}/>
                                <div className={classes.after}/>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={classes.new_message}>
                <textarea className={classes.textarea}
                          ref={newMess}
                          placeholder={"Type you message..."}/>
                <div className={classes.button_container}>
                    <button className={classes.send_button} onClick={addMess}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default MessageConstructor;