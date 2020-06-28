import React from "react";
import logo from '../../logo.svg'
import './Logo.css';

export const Logo = () => {
    return (
        <a className='logo' href="">
            <img src={logo} alt="Logo"/>
        </a>
    )
}
