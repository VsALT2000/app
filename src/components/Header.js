import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.container_logo}>
                <img className={classes.logo} src={"https://i.imgur.com/HWbxMZZ.png"} alt={"logo"}/>
            </div>
            <div className={classes.container_name}>
                <span className={classes.app_name}>PORTAL</span>
            </div>
        </header>
    );
}

export default Header;