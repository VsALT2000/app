const ADD_MESS = "ADD-MESS";

let initialState = {
    dialogData: [
        {
            id: 1,
            name: "Chell",
            avatar: "https://u.kanobu.ru/editor/images/73/3b6faf4e-0fa3-46ac-9067-900a76f241c6.jpg"
        },
        {id: 2, name: "GLaDOS", avatar: "https://i1.sndcdn.com/artworks-000051748509-x7ebkz-t500x500.jpg"},
        {
            id: 3,
            name: "Companion Cube",
            avatar: "https://u.kanobu.ru/images/2011/10/14/ae11ddf4-d454-4f87-becc-de4eb1c80d86.jpg.thumbnail.jpg"
        },
    ],
    messageData: [
        {
            id: 1,
            messages: [
                {
                    isYouMess: true,
                    text: "Hello? Anyone in there?"
                },
                {
                    isYouMess: true,
                    text: "Hm. Could be Spanish, could be Spanish. Hola, amigo! Abre la puerta! Donde esta--no. Um..."
                },
                {
                    isYouMess: false,
                    text: "*jump*"
                },
                {
                    isYouMess: true,
                    text: "Are you okay? Are you - Don't answer that. I'm absolutely sure you're fine. There's plenty of time for you to recover. Just take it slow."
                },
                {
                    isYouMess: false,
                    text: "*jump*"
                },
                {
                    isYouMess: true,
                    text: "Stay calm! 'Prepare' - that's all they're saying. 'Prepare.' It's all fine. Alright? Don't move. I'm gonna get us out of here."
                },
            ]
        },
        {
            id: 2,
            messages: [
                {
                    isYouMess: true,
                    text: "That is a potato battery. It's a toy for children. And now she lives in it."
                },
                {
                    isYouMess: false,
                    text: "The engineers tried everything to make me... behave. To slow me down."
                },
                {
                    isYouMess: false,
                    text: "Once, they even attached an Intelligence Dampening Sphere on me. It clung to my brain like a tumor, generating an endless stream of terrible ideas."
                },
                {
                    isYouMess: true,
                    text: "No! I'm not listening! I'm not listening!"
                },
                {
                    isYouMess: false,
                    text: "It was YOUR voice."
                },
                {
                    isYouMess: true,
                    text: "No! No! You're LYING! You're LYING!"
                },
            ]
        },
        {
            id: 3,
            messages: [
                {
                    isYouMess: true,
                    text: "?"
                },
                {
                    isYouMess: false,
                    text: "..."
                },
            ]
        }
    ]
}

const MessagesReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.messageData = [...state.messageData];
    if (action.type === ADD_MESS) {
        let newMess = {
            isYouMess: true,
            text: action.text
        }

        stateCopy.messageData.forEach(m => {
            if (m.id === action.id) {
                m.messages.push(newMess);
            }
        });
    }

    return stateCopy;
}

export const addMessActionCreator = (id, text) => ({type: ADD_MESS, id: id, text: text});

export default MessagesReducer;