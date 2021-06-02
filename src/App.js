import './App.css';
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Groups from "./components/Groups/Groups";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <div className={"body"}>
                    <Navigation/>
                    <div className={"content"}>
                        <Route path={"/profile"} render={() => <Profile store={props.store}
                                                                        dispatch={props.dispatch}
                                                                        state={props.state.profileData}/>}/>
                        <Route path={"/messages"} render={() => <Messages store={props.store}
                                                                          dispatch={props.dispatch}
                                                                          state={props.state.messagesData}/>}/>
                        <Route path={"/groups"} render={() => <Groups/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                    </div>
                </div>
                <Footer className={"footer"}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
