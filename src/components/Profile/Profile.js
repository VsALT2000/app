import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src={"https://i.imgur.com/4D8dt7C.png"} alt={"header"}/>
            </div>
            <div className={classes.content}>
                <Info avatar={props.state.avatar}/>
                <MyPosts state={props.state}
                         store={props.store}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Profile;