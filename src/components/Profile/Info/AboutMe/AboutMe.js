import classes from "./AboutMe.module.css";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfileStatusTC, setProfileStatusTC} from "../../../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class AboutMe extends React.Component {
    statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status,
    }

    changeStatus = (e) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }

    activateEditMode = () => {
        if (this.props.userId === this.props.myId)
            this.setState(
                {
                    editMode: true
                }
            )
    }

    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        );
        this.props.setProfileStatusTC(this.state.status);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {
                    status: this.props.status
                }
            )
        }
    }

    render() {
        return (
            <div className={classes.about_me}>
                <div className={classes.content}>About me:</div>
                {
                    this.state.editMode &&
                    <div className={classes.textarea_container}>
                        <textarea className={classes.textarea}
                                  onBlur={this.deactivateEditMode}
                                  onChange={this.changeStatus}
                                  autoFocus={true}
                                  onSelect={true}
                                  value={this.state.status}
                                  rows={"1"}/>
                    </div>
                }
                {
                    !this.state.editMode &&
                    <div className={classes.text} onClick={this.activateEditMode}>
                        {this.props.status || "Change status"}
                    </div>
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.profileData.userId,
        myId: state.auth.id,
        aboutMe: state.profileData.aboutMe,
        contacts: state.profileData.contacts,
        lookingForAJob: state.profileData.lookingForAJob,
        lookingForAJobDescription: state.profileData.lookingForAJobDescription,
        status: state.profileData.status,
    }
}

export default compose(connect(mapStateToProps, {
    getProfileStatusTC,
    setProfileStatusTC
}), withRouter)(AboutMe)
