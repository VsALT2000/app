import Profile from "./Profile";
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {toggleIsFetching, setProfile, setPhotos} from "../../redux/profileReducer";
import classes from "../Profile/ProfileContainer.module.css";
import Preloader from "../Preloader/Preloader";
import avatar from "../../assets/avatar.png"

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        let id = window.location.pathname.split("/")[2];
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setProfile(response.data);
            if (this.props.photos.large === null) {
                this.props.setPhotos(avatar, avatar);
            }
        });
    }

    render() {

        return (
            <div className={classes.container_load}>
                {
                    this.props.isFetching
                        ? <Preloader isFetching={this.props.isFetching}/>
                        : null
                }
                <Profile avatar={this.props.photos.large}
                         name={this.props.fullName}
                         aboutMe={this.props.aboutMe}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.profileData.userId,
        isFetching: state.profileData.isFetching,
        photos: state.profileData.photos,
        fullName: state.profileData.fullName,
        aboutMe: state.profileData.aboutMe,
    }
}

export default connect(mapStateToProps,{toggleIsFetching, setProfile, setPhotos}) (ProfileContainer);