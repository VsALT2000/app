import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            console.log(this.props.gettingData);
            console.log("---------2---------");
            console.log(this.props.isAuth);
                if (!this.props.isAuth /*&& !this.props.gettingData*/) return <Redirect to={"/login"}/>
                return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps) (RedirectComponent);
}