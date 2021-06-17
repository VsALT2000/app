import {connect} from "react-redux";
import {
    setUsersTC, updateUsersTC, deleteFollowTC, postFollowTC
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import classes from "./UsersContainer.module.css";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component { // Оставил классовую компоненту, просто чтобы была.
    componentDidMount() {
        this.props.setUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => this.props.updateUsersTC(pageNumber, this.props.pageSize)

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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
    }
}

export default compose(connect(mapStateToProps,
    {
        setUsersTC, updateUsersTC,
        postFollowTC, deleteFollowTC
    }))(UsersContainer);