import classes from "./MessageConstructor.module.css";
import Message from "./Message/Message";
import React from "react";
import AddMessageForm from "./MessageForm";

const MessageConstructor = (props) => {
    const onSubmit = (mess) => {
        let text = mess.newMessageBody;
        if (text && text.replace(/\s+/g, '')) {
            props.addMess(props.messageUser.id, text);
            mess.newMessageBody = "";
        }
    }

    return (
        <div className={classes.messages}>
            <div className={classes.messages_items}>
                {props.messageUser.messages.map(m => {
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
            <AddMessageForm onSubmit={onSubmit}/>
        </div>
    );
}

export default MessageConstructor;