import {changeThemeActionCreator} from "../../redux/themeReducer";
import Header from "./Header";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        theme: state.theme.theme,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: () => {
            dispatch(changeThemeActionCreator())
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps) (Header)

export default HeaderContainer;