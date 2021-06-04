import classes from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header(props) {
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
            <div className={classes.container_name}>
                <span className={classes.app_name}>PORTAL</span>
            </div>
        </header>
    );
}

export default Header;