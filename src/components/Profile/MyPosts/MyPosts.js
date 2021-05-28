import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={classes.my_posts}>
            <h4>My posts</h4>
            <div className={classes.new_post}>
                <textarea className={classes.textarea} />
                <div className={classes.button_container}>
                    <button className={classes.send_button}>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;