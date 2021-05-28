import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <img src={"https://i.imgur.com/4D8dt7C.png"}/>
                </div>
                <Info/>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;