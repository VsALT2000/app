import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getProfileStatusTC, setProfileStatusTC, setProfileTC} from "../../redux/profileReducer";
import classes from "../Profile/ProfileContainer.module.css";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
//import withLoginRedirect from "../../hoc/LoginRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params.userId);
        console.log(this.props.myId);
        this.props.setProfileTC(this.props.match.params.userId || this.props.myId);
        this.props.getProfileStatusTC(this.props.match.params.userId || this.props.myId);
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

export default compose(connect(mapStateToProps, {setProfileTC, getProfileStatusTC, setProfileStatusTC})/*, withLoginRedirect*/, withRouter) (ProfileContainer)