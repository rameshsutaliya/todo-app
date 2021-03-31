import React from "react";
import "../css/headerStyle.css"

class Header extends React.Component{
    render() {
        return(
            <div className="App-header">
                <a href="#default" className="logo">Todo App</a>
                <div className="App-header-right">
                    <a className="App-active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        )
    }
}

export default Header;
