import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export default (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isAuth ? <Redirect to={`/profile/${this.props.id}`}/> : <Component {...this.props}/>;
        }
    }

    return connect((state) => ({isAuth: state.auth.isAuth})) (RedirectComponent);
}