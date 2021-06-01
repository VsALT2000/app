let rerenderEntireTree = () => {
};

const stateData = {
    profileData: {
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
    },
    messagesData: {
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
}

class Store {
    #state;

    get state() {
        return this.#state;
    }

    set state(state) {
        this.#state = state;
    }

    constructor(state) {
        this.#state = state;
    }

    dispatch(action) {
        switch (action.type) {
            case "ADD-POST":
                let newPost = {
                    text: action.text,
                    countLikes: 0
                }

                this.state.profileData.postsData.push(newPost);
                rerenderEntireTree(this);
                break;
            case "ADD-MESS":
                let newMess = {
                    isYouMess: true,
                    text: action.text
                }

                this.state.messagesData.messageData.forEach(m => {
                    if (m.id === action.id) {
                        m.messages.push(newMess);
                    }
                });
                rerenderEntireTree(this);
                break;
            default:
                throw new Error("action type error");
        }
    }

    /*addPost(text) {
        let newPost = {
            text: text,
            countLikes: 0
        }

        this.state.profileData.postsData.push(newPost);
        rerenderEntireTree(this);
    }

    addMess(id, text) {
        let newMess = {
            isYouMess: true,
            text: text
        }

        this.state.messagesData.messageData.forEach(m => {
            if (m.id === id) {
                m.messages.push(newMess);
            }
        });
        rerenderEntireTree(this);
    }*/
}

export const rerender = (observer) => {
    rerenderEntireTree = observer;
}

let store = new Store(stateData);
export default store;