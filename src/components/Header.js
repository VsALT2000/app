function Header() {
    return (
        <header className={"header"}>
            <div className={"container-logo"}>
                <img className={"logo"} src={"https://i.imgur.com/HWbxMZZ.png"} alt={"logo"}/>
            </div>
            <div className={"container-name"}>
                <span className={"app-name"}>PORTAL</span>
            </div>
        </header>
    );
}

export default Header;