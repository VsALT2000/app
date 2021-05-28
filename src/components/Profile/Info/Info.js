import classes from "./Info.module.css";

function Info() {
    return (
        <div className={classes.profile}>
            <div className={classes.profile_avatar}>
                <img src={"https://i.pinimg.com/564x/66/72/6e/66726ed04f55c72c7ccf056ae25c6928.jpg"}/>
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