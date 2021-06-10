import {connect} from "react-redux";
import {
    setUsersTC, updateUsersTC, deleteFollowTC, postFollowTC
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import classes from "./UsersContainer.module.css";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.updateUsersTC(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <div className={classes.container_load}>
                {
                    this.props.isFetching
                        ? <Preloader isFetching={this.props.isFetching}/>
                        : null
                }
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.usersData.items,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress,
    }
}

export default connect(mapStateToProps,
    {
        setUsersTC, updateUsersTC,
        postFollowTC, deleteFollowTC
    }) (UsersContainer);