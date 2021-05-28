import classes from "./Likes.module.css";

function Likes(props) {
    return (
        <div className={classes.likes_container}>
            <div className={classes.likes}>
                <button>Like</button>
            </div>
            <div className={classes.count_likes}>
                {props.countLikes}
            </div>
        </div>
    );
}

export default Likes;