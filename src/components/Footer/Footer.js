import classes from "./Footer.module.css";

function Footer() {
    return (
        <div className={classes.footer}>
            Contacts:
            <div className={classes.contacts}>
                <a href={"https://vk.com/vsalt"}>VK</a>
                <a href={"https://github.com/VsALT2000"}>GitHub</a>
                <div>sergey.k.alt2000@gmail.com</div>
                <div>89220305063</div>
            </div>
        </div>
    );
}

export default Footer;