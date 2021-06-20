import classes from "./Users.module.css";
import React from "react";
import User from "./User/User";
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.users}>
                {
                    props.users.map(user => {
                        return <User user={user}
                                     postFollowTC={props.postFollowTC}
                                     deleteFollowTC={props.deleteFollowTC}
                                     followingInProgress={props.followingInProgress}
                                     isAuth={props.isAuth}/>
                    })
                }
            </div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
        </div>
    )
}

export default Users;