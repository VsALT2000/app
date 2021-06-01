import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let posts = props.data.map(p => <Post avatar={props.avatar} data={p}/>);
    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        props.store.dispatch(addPostActionCreator(text));
        newPost.current.value = "";
    }

    return (
        <div className={classes.my_posts}>
            <h4>My posts</h4>
            <div className={classes.new_post}>
                <textarea className={classes.textarea} ref={newPost} placeholder={"Type you message..."}/>
                <div className={classes.button_container}>
                    <button className={classes.send_button} onClick={addPost}>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;