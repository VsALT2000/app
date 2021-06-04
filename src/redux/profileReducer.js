const ADD_POST = "ADD-POST";

let initialState = {
    avatar: "https://i.pinimg.com/564x/66/72/6e/66726ed04f55c72c7ccf056ae25c6928.jpg",
    postsData:
        [
            {
                text: "Estás usando este software de traducción de forma incorrecta. Por favor, consulta el manual.",
                countLikes: 500000
            },
            {
                text: "So that's just what I was doing. I was just reading... ah... books. So I'm not a moron. " +
                    "Anyway. Just finished the last one. The hardest one. Machiavelli. Do not know what all the " +
                    "fuss was about. Understood it perfectly. Have you read that one?",
                countLikes: 37
            },
        ]
}

const ProfileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    if (action.type === ADD_POST) {
        let newPost = {
            text: action.text,
            countLikes: 0
        }
        stateCopy.postsData = [...state.postsData, newPost];
    }

    return stateCopy;
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text: text});

export default ProfileReducer;