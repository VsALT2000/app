import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let onChangeTheme = () => {
        props.changeTheme();
    }
    return (
        <header className={classes.header}>
            <div className={classes.container_logo}>
                <button className={classes.button} onClick={onChangeTheme}>
                    <img className={classes.logo} src={logo} alt={"logo"}/>
                </button>
            </div>
            <div className={classes.container}>
                <div className={classes.container_name}>
                    <span className={classes.app_name}>PORTAL</span>
                </div>
                <div className={classes.container_auth}>
                    <div className={`${classes.avatar} ${classes.post_avatar} `}>
                        <img className={classes.image} src={props.avatar} alt={"avatar"}/>
                    </div>
                    { props.isAuth ? props.login : <NavLink to={"/login"}>Кто я</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;