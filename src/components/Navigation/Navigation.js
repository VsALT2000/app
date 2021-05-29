import classes from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div className={classes.body}>
            <nav className={classes.nav}>
                <NavLink to={"/profile"} className={classes.nav_link}>
                    <div className={`${classes.icon} ${classes.profile}`}/>
                    <div className={classes.description}>
                        Profile
                    </div>
                </NavLink>
                <NavLink to={"/messages"}>
                    <div className={`${classes.icon} ${classes.messages}`}/>
                    <div className={classes.description}>
                        Messages
                    </div>
                </NavLink>
                <NavLink to={"/groups"}>
                    <div className={`${classes.icon} ${classes.groups}`}/>
                    <div className={classes.description}>
                        <span>Groups</span>
                    </div>
                </NavLink>
                <NavLink to={"/music"}>
                    <div className={`${classes.icon} ${classes.music}`}/>
                    <div className={classes.description}>
                        <span>Music</span>
                    </div>
                </NavLink>
            </nav>
        </div>
    );
}

export default Navigation;