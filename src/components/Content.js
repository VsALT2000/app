import classes from "./Content.module.css";

function Content() {
    return (
        <div className={classes.content}>
            <div className={classes.item}>There is nothing here now.</div>
            <div className={`${classes.item} ${classes.active}`}>There is nothing here now.</div>
        </div>
    );
}

export default Content;