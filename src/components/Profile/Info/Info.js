import classes from "./Info.module.css";

const Info = (props) => {
    return (
        <div className={classes.profile}>
            <div className={`${classes.avatar} ${classes.profile_avatar}`}>
                <img className={classes.image} src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={classes.profile_info}>
                <h3>Wheatley</h3>
                <div>Date of Birth: 2 January</div>
                <div>City: Space</div>
                <div>Education: None</div>
            </div>
        </div>
    );
}

export default Info;