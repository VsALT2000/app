import {connect} from "react-redux";
import {getAuthMeTC} from "../../redux/authReducer";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/AuthRedirect";
import React from "react";

class Login extends React.Component {
    componentDidMount() {
        this.props.getAuthMeTC();
    }

    render() {
        return (
            <div>
                login
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login,
        id: state.auth.id,
    }
}

export default compose(connect(mapStateToProps, {getAuthMeTC}), withAuthRedirect) (Login);