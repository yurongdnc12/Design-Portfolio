import React from 'react';
import './Navbar.css';
import NavbarElement from "../NavbarElement/NavbarElement"

const Navbar = () => {

return (
    <header>
        <div id="gradient-bar">
        </div>
        <nav id="navbar">
            <h1 class="logo"><a href="index.html">RONG</a></h1>
            <ul>
                <NavbarElement href="index.html" label="Work"class="active" />
                <NavbarElement href="about.html" label="About" />
                <NavbarElement href="https://drive.google.com/file/d/10TsfC5ErFtAW-8AIKR7J9mhQ328JmcS1/view?usp=sharing" label="Resume" />
            </ul>
        </nav>
    </header>
)
};

export default Navbar


