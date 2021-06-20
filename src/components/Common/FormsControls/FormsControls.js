import classes from "./FormsControls.module.css";
import React from "react";

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={hasError && classes.error}>
            <input {...input} {...props}/>
            <div className={`${classes.icon} ${classes.error_icon}`}/>
            <div className={classes.error_log}>{meta.error}</div>
        </div>
    )
}

export const CheckboxTC = (id, value) => ({input, meta, ...props}) => {
    return (
        <div className={classes.checkbox}>
            <input {...input} {...props} id={id}/>
            <label htmlFor={id}>{value}</label>
        </div>
    )
}