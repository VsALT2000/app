import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src={"https://i.imgur.com/4D8dt7C.png"} alt={"header"}/>
            </div>
            <div className={classes.content}>
                <Info avatar={props.store.state.profileData.avatar}/>
                <MyPosts avatar={props.store.state.profileData.avatar}
                         data={props.store.state.profileData.postsData}
                         store={props.store}/>
            </div>
        </div>
    );
}

export default Profile;