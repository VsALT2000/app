import classes from "./User.module.css";
import avatar from "../../../assets/avatar.png"
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={classes.user}>
            <div className={`${classes.avatar} ${classes.profile_avatar}`}>
                <img className={classes.image} src={props.user.photos.large || avatar} alt={"avatar"}/>
            </div>
            <div className={classes.container}>
                <div className={classes.profile_info}>
                    <h3>
                        <NavLink to={`/profile/${props.user.id}`}>
                            {props.user.name}
                        </NavLink>
                    </h3>
                </div>
                <div className={classes.action_container}>
                    {
                        props.user.followed
                            ? <button
                                disabled={!props.isAuth || props.followingInProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.deleteFollowTC(props.user.id)
                                }}>Unfollow</button>
                            : <button
                                disabled={!props.isAuth || props.followingInProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.postFollowTC(props.user.id)
                                }}>Follow</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default User;