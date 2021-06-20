import classes from "./Preloader.module.css";
import load from "../../../assets/load.png";
import React from "react";

const Preloader = () => {
    return (
        <div className={classes.content}>
            <div className={classes.loader}/>
            <img className={classes.afterLoader} src={load} alt={load}/>
        </div>
    )
}

export default Preloader;