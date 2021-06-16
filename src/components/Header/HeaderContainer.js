import {changeTheme} from "../../redux/appReducer";
import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import {deleteAuthLoginTC} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        theme: state.app.theme,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.photos.small,
    }
}


export default connect(mapStateToProps, {changeTheme, deleteAuthLoginTC})(HeaderContainer);