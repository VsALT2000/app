import classes from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={classes.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Groups</a>
            </div>
        </nav>
    );
}

export default Navigation;