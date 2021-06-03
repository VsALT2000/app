import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src={"https://i.imgur.com/4D8dt7C.png"} alt={"header"}/>
            </div>
            <div className={classes.content}>
                <Info avatar={props.avatar}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;