import React from "react";
import {FaNeos} from "react-icons/fa";


function Header(){
    return (
        <header>
            <div class = "icon_logo">
                <FaNeos size={30}/>
            </div>
            <div class = "title">
                <h1>Daily Notes</h1>
            </div>
        </header>
    );
}

export default Header;