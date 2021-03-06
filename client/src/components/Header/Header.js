import React from "react";
import "./Header.css";
import Navbar from "../Navbar";
import Logo from "../Logo";
// import Jumbotron from "../Jumbotron";

function Header() {

    return (
        <header>
            <div className="bg-white">
                <Logo />
                <div className="top-shift">
                    <Navbar />
                </div>
            </div>
        </header>
    )
};

export default Header;