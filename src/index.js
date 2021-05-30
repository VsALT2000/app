import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const itsSoBigData = {
    profileData: {
        avatar: "https://i.pinimg.com/564x/66/72/6e/66726ed04f55c72c7ccf056ae25c6928.jpg",
        postsData:
            [
                {
                    text: "Estás usando este software de traducción de forma incorrecta. Por favor, consulta el manual.",
                    countLikes: "500000"
                },
                {
                    text: "So that's just what I was doing. I was just reading... ah... books. So I'm not a moron. " +
                        "Anyway. Just finished the last one. The hardest one. Machiavelli. Do not know what all the " +
                        "fuss was about. Understood it perfectly. Have you read that one?",
                    countLikes: "37"
                },
            ]
    },
    messagesData: {
        dialogData: [
            {id: 0, name: "VsALT"},
            {id: 1, name: "ALT2000"},
            {id: 2, name: "VsALT2000"},
        ],
        messageData: [
            ["Hi.", "What's up?"],
            ["Nothing is here."],
            ["Here too."]
        ]
    }
}


ReactDOM.render(
    <React.StrictMode>
        <App bigData={itsSoBigData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
