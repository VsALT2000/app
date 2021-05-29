import './App.css';
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Groups from "./components/Groups/Groups";
import Music from "./components/Music/Music";

function App() {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <div className={"body"}>
                    <Navigation/>
                    <div className={"content"}>
                        <Route path={"/profile"} component={Profile}/>
                        <Route path={"/messages"} component={Messages}/>
                        <Route path={"/groups"} component={Groups}/>
                        <Route path={"/music"} component={Music}/>
                    </div>
                </div>
                <Footer className={"footer"}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
