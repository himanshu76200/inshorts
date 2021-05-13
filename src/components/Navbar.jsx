import React from 'react';
import Sidebar from "./Sidebar";
import "../styles/Navbar.css";

function Navbar({ setCategory }) {
    return (
        <div className="navbar">
            <div className="icon">
                <Sidebar setCategory={setCategory} />
            </div>
            <img className="inshortImage" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="icon"></img>
        </div>
    )
}

export default Navbar
