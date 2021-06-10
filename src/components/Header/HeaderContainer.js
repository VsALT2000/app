import {changeTheme} from "../../redux/themeReducer";
import Header from "./Header";
import {connect} from "react-redux";
import React from "react";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {changeTheme})(HeaderContainer);