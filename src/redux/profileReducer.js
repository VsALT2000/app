const ADD_POST = "ADD-POST";

const ProfileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            text: action.text,
            countLikes: 0
        }

        state.postsData.push(newPost);
    }

    return state;
}

export default ProfileReducer;