import classes from "./Post.module.css";
import Likes from "./Likes/Likes";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={`${classes.avatar} ${classes.post_avatar} `}>
                <img className={classes.image} src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={classes.text}>
                {props.data.text}
            </div>
            <Likes countLikes={props.data.countLikes}/>
        </div>
    );
}

export default Post;