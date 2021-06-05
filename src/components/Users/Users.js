import classes from "./Users.module.css";
import React from "react";
import User from "./User/User";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    if (pagesCount !== 0) {
        pages.push(1);
        let min = Math.max(props.currentPage - 5, 2);
        let max = Math.min(props.currentPage + 5, pagesCount);
        for (let i = min; i < max; i++) {
            pages.push(i);
        }
        pages.push(pagesCount);
    }
    return (
        <div className={classes.container}>
            <div className={classes.users}>
                {
                    props.items.map(user => {
                        return <User user={user} follow={props.follow} unfollow={props.unfollow}/>
                    })
                }
            </div>
            <div className={classes.pages}>
                {pages.map(p => {
                    return (
                        <div className={props.currentPage === p && classes.selectedPage}
                             onClick={() => {props.onPageChanged(p)}}>
                            <span>{p}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;