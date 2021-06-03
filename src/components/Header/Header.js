import classes from "./Header.module.css";

function Header(props) {
    let onChangeTheme = () => {
        props.changeTheme();
    }

    return (
        <header className={classes.header}>
            <div className={classes.container_logo}>
                <button className={classes.button} onClick={onChangeTheme}>
                    <img className={classes.logo} src={"https://i.imgur.com/Xg4AIv1.png"} alt={"logo"}/>
                </button>
            </div>
            <div className={classes.container_name}>
                <span className={classes.app_name}>PORTAL</span>
            </div>
        </header>
    );
}

export default Header;