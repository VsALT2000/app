import classes from "./Info.module.css";
import Status from "./AboutMe/Status";
import React, {useState} from "react";
import avatar from "../../../assets/avatar.png";
import InfoForm from "./InfoForm";

const Info = (props) => {
    const [displayContacts, setDisplayContacts] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const toggleDisplayContacts = () => {
        setDisplayContacts(!displayContacts);
    }

    const onSubmit = (formData) => {
        const lookingForAJobDescription = formData.lookingForAJobDescription || "No";
        const lookingForAJob = formData.lookingForAJobDescription !== undefined;

        props.setProfileInfoTC({
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: lookingForAJobDescription,
            aboutMe: formData.aboutMe || "",
            fullName: formData.fullName || props.fullName,
            contacts: {
                github: formData.github || "",
                vk: formData.vk || "",
                facebook: formData.facebook || "",
                instagram: formData.instagram || "",
                twitter: formData.twitter || "",
                website: formData.website || "",
                youtube: formData.youtube || "",
                mainLink: formData.mainLink || "",
            },
        }).then(() => {
            toggleEditMode();
        });
    }

    const onUpload = (e) => {
        if (e.target.files.length)
            props.setProfilePhotoTC(e.target.files[0]);
    }

    const displayContactsClass = displayContacts ? classes.contacts : classes.display_none;
    const onHoverClass = props.isOwner ? classes.onHover : classes.display_none;
    return (
        <div className={classes.profile}>
            <div>
                <div className={classes.avatar}>
                    <img className={classes.image} src={props.photos.large || avatar} alt={"avatar"}/>
                    <div className={onHoverClass}>
                        <div className={classes.avatar_settings}/>
                        <input type="file" className={classes.input_file} onChange={onUpload}/>
                    </div>
                </div>
            </div>
            <div className={classes.profile_info}>
                <h3>{props.fullName}</h3>
                <Status isOwner={props.isOwner} status={props.status} setProfileStatusTC={props.setProfileStatusTC}/>
                {
                    editMode
                        ? <InfoForm {...props} onSubmit={onSubmit} toggleDisplayContacts={toggleDisplayContacts}
                                    displayContacts={displayContacts} displayContactsClass={displayContactsClass}
                                    fullName={props.fullName}/>
                        : <ProfileInfo {...props} toggleDisplayContacts={toggleDisplayContacts}
                                       displayContacts={displayContacts} displayContactsClass={displayContactsClass}
                                       goToEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    );
}

const ProfileInfo = (props) => {
    let contacts;
    if (props.contacts)
        contacts = Object.keys(props.contacts).filter(key => props.contacts[key]).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]}/>
        });

    return (
        <>
            <div>About me: {props.aboutMe}</div>
            <div>Looking for a job: {props.lookingForAJob ? props.lookingForAJobDescription : "No"}</div>
            <div>
                <span className={classes.show_contacts} onClick={props.toggleDisplayContacts}>
                    {props.displayContacts ? "Hide" : "Show"} contacts
                </span>
            </div>
            <div className={props.displayContactsClass}>
                {
                    contacts && contacts.length !== 0
                        ? contacts
                        : <div>No contacts</div>
                }
            </div>
            {
                props.isOwner
                    ? <button onClick={props.goToEditMode}>Edit</button>
                    : null
            }
        </>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    if (/https?:\/\/.*?/.exec(contactValue) === null) {
        contactValue = "https://" + contactValue;
    }
    return (
        <div><a href={contactValue} target={"_blank"} rel={"noreferrer"}>{contactTitle}</a></div>
    )
}

export default React.memo(Info);