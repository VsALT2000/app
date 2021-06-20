import classes from "./Likes.module.css";
import {useState} from "react";

const Likes = (props) => {
    const [isLiking, setIsLiking] = useState(props.isLiking);
    const [countLikes, setCountLikes] = useState(props.countLikes);

    const like = () => {
        if (props.isLiking)
            if (isLiking) {
                setIsLiking(false);
                setCountLikes(props.countLikes - 1);
            } else {
                setIsLiking(true);
                setCountLikes(props.countLikes);
            }
        else {
            if (isLiking) {
                setIsLiking(false);
                setCountLikes(props.countLikes);
            } else {
                setIsLiking(true);
                setCountLikes(props.countLikes + 1);
            }
        }
    }

    const liking = isLiking ? `${classes.icon} ${classes.like} ${classes.liking}` : `${classes.icon} ${classes.like}`;

    return (
        <div className={classes.likes_container}>
            <button onClick={like} className={liking} />
            <div className={classes.count_likes}>
                {countLikes}
            </div>
        </div>
    );
}

export default Likes;