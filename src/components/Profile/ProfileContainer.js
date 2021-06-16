import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getProfileStatusTC, setProfileStatusTC, setProfileTC} from "../../redux/profileReducer";
import classes from "../Profile/ProfileContainer.module.css";
import Preloader from "../Common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import withProfileRedirect from "../../hoc/ProfileRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.userId || this.props.myId;
        this.props.setProfileTC(id);
        this.props.getProfileStatusTC(id);
    }

    render() {
        return (
            <div className={classes.container_load}>
                {
                    this.props.isFetching
                        ? <Preloader isFetching={this.props.isFetching}/>
                        : null
                }
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.profileData.userId,
        myId: state.auth.id,
        isFetching: state.profileData.isFetching,
        photos: state.profileData.photos,
        fullName: state.profileData.fullName,
    }
}

export default compose(connect(mapStateToProps, {
    setProfileTC,
    getProfileStatusTC,
    setProfileStatusTC
}), withRouter, withProfileRedirect)(ProfileContainer)