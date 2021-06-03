import React from "react";
import {addMessActionCreator} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesData.dialogData,
        messageData: state.messagesData.messageData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMess: (id, text) => {
            dispatch(addMessActionCreator(id, text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages)

export default MessagesContainer;