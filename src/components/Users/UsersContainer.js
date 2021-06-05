import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import classes from "./UsersContainer.module.css";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
                <Users currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       items={this.props.items}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}/>
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
        isFetching: state.usersData.isFetching
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        setUsers, setTotalUsersCount, toggleIsFetching
    }) (UsersContainer);