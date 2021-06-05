import {changeTheme} from "../../redux/themeReducer";
import Header from "./Header";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
    }
}


const HeaderContainer = connect(mapStateToProps,
    {
        changeTheme
    })(Header)

export default HeaderContainer;