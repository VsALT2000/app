import classes from "./Likes.module.css";

function Likes(props) {
    return (
        <div className={classes.likes_container}>
            <button className={`${classes.icon} ${classes.like}`} />
            <div className={classes.count_likes}>
                {props.countLikes}
            </div>
        </div>
    );
}

export default Likes;