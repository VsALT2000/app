import classes from "./Post.module.css";
import Likes from "../../../Sourse/Likes/Likes";

function Post(props) {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img src={props.logo}/>
            </div>
            <div className={classes.text}>
                {props.message}
            </div>
            <Likes countLikes={props.countLikes}/>
        </div>
    );
}

export default Post;