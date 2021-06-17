import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export default (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            let id = this.props.match.params.userId || this.props.myId;
            return !id ? <Redirect to={"/login"}/> : <Component {...this.props}/>;
        }
    }

    return connect((state) => ({isAuth: state.auth.isAuth}))(RedirectComponent);
}