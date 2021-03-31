import React from "react";
import "../css/footerStyle.css"
class Footer extends React.Component{
    render() {
        return(
            <footer className="App-footer">
                    <p>Author: Ramesh Sutaliya<br/>
                        <a href="mailto:rameshsutliya@gmail.com">rameshsutliya@example.com</a>
                    </p>
            </footer>
        )
    }
}

export default Footer;