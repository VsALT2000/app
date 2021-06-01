import classes from "./Footer.module.css";

function Footer() {
    return (
        <div className={classes.footer}>
            Contacts:
            <div className={classes.contacts}>
                <div className={classes.contacts_container}>
                    <a href={"https://vk.com/vsalt"}>VK</a>
                </div>
                <div className={classes.contacts_container}>
                    <a href={"https://github.com/VsALT2000"}>GitHub</a>
                </div>
                <div className={classes.contacts_container}>
                    <div>sergey.k.alt2000@gmail.com</div>
                </div>
                <div className={classes.contacts_container}>
                    <div>89220305063</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;