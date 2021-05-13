import React from 'react';
import Sidebar from "./Sidebar";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="icon">
                <Sidebar />
            </div>
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="icon"></img>
        </div>
    )
}

export default Navbar
