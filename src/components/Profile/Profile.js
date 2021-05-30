import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src={"https://i.imgur.com/4D8dt7C.png"}/>
            </div>
            <div className={classes.content}>
                <Info avatar={props.data.avatar}/>
                <MyPosts avatar={props.data.avatar} data={props.data.postsData}/>
            </div>
        </div>
    );
}

export default Profile;