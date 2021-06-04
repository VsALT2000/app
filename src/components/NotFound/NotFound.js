import classes from "./NotFound.module.css";
import notFound from "../../assets/404.png";

const NotFound = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <img src={notFound} alt={"404"}/>
            </div>
        </div>
    );
}

export default NotFound;