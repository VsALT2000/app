import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <div className={"body"}>
                <Navigation/>
                <Content/>
            </div>
            <Footer className={"footer"}/>
        </div>
    );
}

export default App;
