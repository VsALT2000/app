import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {setProfileTC} from "../../redux/profileReducer";
import classes from "../Profile/ProfileContainer.module.css";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import avatar from "../../assets/avatar.png";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfileTC(this.props.match.params.userId || 17524);
    }

    render() {
        return (
            <div className={classes.container_load}>
                {
                    this.props.isFetching
                        ? <Preloader isFetching={this.props.isFetching}/>
                        : null
                }
                <Profile avatar={this.props.photos.large || avatar}
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

export default compose(connect(mapStateToProps, {setProfileTC}), withAuthRedirect, withRouter) (ProfileContainer)