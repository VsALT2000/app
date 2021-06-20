import classes from "./Info.module.css";
import AboutMe from "./AboutMe/AboutMe";
import React from "react";

const Info = (props) => {
    return (
        <div className={classes.profile}>
            <div className={`${classes.avatar} ${classes.profile_avatar}`}>
                <img className={classes.image} src={props.avatar} alt={"avatar"}/>
            </div>
            <div className={classes.profile_info}>
                <h3>{props.name}</h3>
                <AboutMe status={props.status} userId={props.userId} myId={props.myId}
                         setProfileStatusTC={props.setProfileStatusTC}/>
                <div>City: in progress</div>
                <div>Education: in progress</div>
            </div>
        </div>
    );
}

export default React.memo(Info);