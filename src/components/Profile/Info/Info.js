import classes from "./Info.module.css";

function Info(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.profile_avatar}>
                <img src={props.avatar}/>
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