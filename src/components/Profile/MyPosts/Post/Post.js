import classes from "./Post.module.css";
import Likes from "./Likes/Likes";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={`${classes.avatar} ${classes.post_avatar} `}>
                <img className={classes.image} src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={classes.text}>
                <div>
                    {props.data.text}
                </div>
            </div>
            <Likes countLikes={props.data.countLikes} isLiking={props.data.isLiking}/>
        </div>
    );
}

export default Post;