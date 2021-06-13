import {addMess} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import withLoginRedirect from "../../hoc/LoginRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesData.dialogData,
        messageData: state.messagesData.messageData,
        isAuth: state.auth.isAuth,

        gettingData: state.auth.gettingData,
    }
}

export default compose(connect(mapStateToProps, {addMess}), withLoginRedirect) (Messages)