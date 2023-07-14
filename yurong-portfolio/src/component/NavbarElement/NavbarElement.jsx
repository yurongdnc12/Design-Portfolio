import React from "react";


const NavbarElement = (props) => {
    return (
        <li><a href={props.href}>{props.label}</a></li>
    )
};

export default NavbarElement;