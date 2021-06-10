import {addMess} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesData.dialogData,
        messageData: state.messagesData.messageData,
        isAuth: state.auth.isAuth,
    }
}

export default compose(connect(mapStateToProps, {addMess}), withAuthRedirect) (Messages)