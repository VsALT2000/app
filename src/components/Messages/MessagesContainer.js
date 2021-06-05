import {addMess} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesData.dialogData,
        messageData: state.messagesData.messageData,
    }
}

const MessagesContainer = connect(mapStateToProps, {
    addMess
})(Messages)

export default MessagesContainer;