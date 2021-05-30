import classes from "./MessageConstructor.module.css";
import Message from "./Message/Message";

function MessageConstructor(props) {
    return (
        <div className={classes.messages}>
            <div className={classes.messages_items}>
                {props.data.map(m => {
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
                <textarea className={classes.textarea}/>
                <div className={classes.button_container}>
                    <button className={classes.send_button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default MessageConstructor;