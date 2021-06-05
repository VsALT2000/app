import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        photos: state.profileData.photos,
        postsData: state.profileData.postsData,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts)

export default MyPostsContainer;