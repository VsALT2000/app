const ADD_MESS = "ADD-MESS";

const MessagesReducer = (state, action) => {
    if (action.type === ADD_MESS) {
        let newMess = {
            isYouMess: true,
            text: action.text
        }

        state.messageData.forEach(m => {
            if (m.id === action.id) {
                m.messages.push(newMess);
            }
        });
    }

    return state
}

export default MessagesReducer;