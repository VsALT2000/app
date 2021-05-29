import classes from "./Post.module.css";
import Likes from "./Likes/Likes";

function Post(props) {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={classes.text}>
                {props.message}
            </div>
            <Likes countLikes={props.countLikes}/>
        </div>
    );
}

export default Post;