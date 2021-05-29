import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const postsData = [
    {
        text: "Estás usando este software de traducción de forma incorrecta. Por favor, consulta el manual.",
        countLikes: "500000"
    },
    {
        text: "So that's just what I was doing. I was just reading... ah... books. So I'm not a moron. Anyway. Just finished the last one. The hardest one. Machiavelli. Do not know what all the fuss was about. Understood it perfectly. Have you read that one?",
        countLikes: "37"
    },
];

const MyPosts = (props) => {
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
                <Post avatar={props.avatar} message={postsData[0].text} countLikes={postsData[0].countLikes}/>
                <Post avatar={props.avatar} message={postsData[1].text} countLikes={postsData[1].countLikes}/>
            </div>
        </div>
    );
}

export default MyPosts;