import React, {useEffect} from "react";
import {connect} from "react-redux";
import {addPost, getProfileStatusTC, setProfileStatusTC, setProfileTC} from "../../redux/profileReducer";
import classes from "../Profile/Profile.module.css";
import Preloader from "../Common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import withProfileRedirect from "../../hoc/ProfileRedirect";
import {compose} from "redux";
import headerPhoto from "../../assets/Aperture.png";
import Info from "./Info/Info";
import avatar from "../../assets/avatar.png";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
    const id = props.match.params.userId || props.myId;

    useEffect(() => {
        props.setProfileTC(id);
        props.getProfileStatusTC(id);
    }, [id]);

    return (
        <div className={classes.container_load}>
            {
                props.isFetching
                    ? <Preloader isFetching={props.isFetching}/>
                    : null
            }
            <div className={classes.container}>
                <div className={classes.header}>
                    <img src={headerPhoto} alt={"header"} className={classes.logo}/>
                </div>
                <div className={classes.content}>
                    <Info avatar={props.photos.large || avatar} name={props.fullName} status={props.status}
                          userId={props.userId} myId={props.myId} setProfileStatusTC={props.setProfileStatusTC}/>
                    <MyPosts postsData={props.postsData} avatar={props.photos.small || avatar} addPost={props.addPost}/>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.profileData.userId,
        myId: state.auth.id,
        isFetching: state.profileData.isFetching,
        photos: state.profileData.photos,
        fullName: state.profileData.fullName,
        status: state.profileData.status,
        postsData: state.profileData.postsData,
    }
}

export default compose(connect(mapStateToProps, {
    setProfileTC,
    getProfileStatusTC,
    setProfileStatusTC,
    addPost,
}), withRouter, withProfileRedirect)(Profile)