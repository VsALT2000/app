import classes from "./Users.module.css";
import React from "react";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
    getUsers = () => {
        if (this.props.items.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }
    render() {
        this.getUsers();
        let count = 0;
        let users = this.props.items.map(user => {
            if (count < 4) {
                count++;
                return <User user={user} follow={this.props.follow} unfollow={this.props.unfollow}/>
            }
        })
        return (
            <div className={classes.container}>
                <div className={classes.users}>
                    {users}
                </div>
                <div className={classes.button}>
                    show more
                </div>
            </div>
        )
    }
}

/*const Users = (props) => {
    if (props.items.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }
    let count = 0;
    let users = props.items.map(user => {
        if (count < 4) {
            count++;
            return <User user={user} follow={props.follow} unfollow={props.unfollow}/>
        }
    });
    return (
        <div className={classes.container}>
            <div className={classes.users}>
                {users}
            </div>
            <div className={classes.button}>
                show more
            </div>
        </div>
    );
}*/

export default Users;