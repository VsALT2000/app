import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import AddPostForm from "./PostForm";

const MyPosts = (props) => {
    const onSubmit = (post) => {
        let text = post.newPostBody;
        if (text && text.replace(/\s+/g, '')) {
            props.addPost(text);
            post.newPostBody = "";
        }
    }

    return (
        <div className={classes.my_posts}>
            <h4>My posts</h4>
            <AddPostForm onSubmit={onSubmit}/>
            <div className={classes.posts}>
                {props.postsData.map(p => <Post avatar={props.avatar} data={p}/>)}
            </div>
        </div>
    );
}

export default MyPosts;