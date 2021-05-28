import classes from "./Post.module.css";

function Post() {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img src={"https://i.pinimg.com/564x/66/72/6e/66726ed04f55c72c7ccf056ae25c6928.jpg"}/>
            </div>
            <div className={classes.text}>
                Some text.
            </div>
        </div>
    );
}

export default Post;