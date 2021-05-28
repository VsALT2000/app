import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

let logo = "https://i.pinimg.com/564x/66/72/6e/66726ed04f55c72c7ccf056ae25c6928.jpg";

function Profile() {
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <img src={"https://i.imgur.com/4D8dt7C.png"}/>
                </div>
                <Info logo={logo}/>
                <MyPosts logo={logo}/>
            </div>
        </div>
    );
}

export default Profile;