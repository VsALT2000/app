import classes from "./Info.module.css";

const Info = (props) => {
    return (
        <div className={classes.profile}>
            <div className={`${classes.avatar} ${classes.profile_avatar}`}>
                <img className={classes.image} src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={classes.profile_info}>
                <h3>{props.name}</h3>
                <div>About me: {props.aboutMe}</div>
                <div>City: in progress</div>
                <div>Education: in progress</div>
            </div>
        </div>
    );
}

export default Info;