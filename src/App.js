import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <div className={"body"}>
                <Navigation/>
                <Profile />
            </div>
            <Footer className={"footer"}/>
        </div>
    );
}

export default App;
