import classes from "./User.module.css";

const User = (props) => {
    return (
        <div className={classes.user}>
            <div className={`${classes.avatar} ${classes.profile_avatar}`}>
                <img className={classes.image} src={props.user.photos.small || "https://i.pinimg.com/564x/66/72/6e/66726ed04f55c72c7ccf056ae25c6928.jpg"} alt={"avatar"}/>
            </div>
            <div className={classes.container}>
                <div className={classes.profile_info}>
                    <h3>{props.user.name}</h3>
                    <div>Date of Birth: {"props.user.bio.dateOfBirth"}</div>
                    <div>City: {"props.user.bio.city"}</div>
                    <div>Education: {"props.user.bio.education"}</div>
                </div>
                <div className={classes.action_container}>
                    {
                        props.user.followed
                        ? <button onClick={() => {props.unfollow(props.user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(props.user.id)}}>Follow</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default User;