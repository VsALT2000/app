import classes from "./Profile.module.css";
import Info from "./Info/Info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import headerPhoto from "../../assets/Aperture.png";
import React from "react";

const Profile = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.image_container}>
                    <img src={headerPhoto} alt={"header"} className={classes.logo}/>
                </div>
            </div>
            <div className={classes.content}>
                <Info avatar={props.avatar} name={props.name} aboutMe={props.aboutMe}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;