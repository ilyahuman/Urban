import React from "react";
import './MenuButton.css';

export const MenuButton = ({ menuIsOpened, toggleMenu }) => {

    return (
        <button onClick={toggleMenu} type='button' className={menuIsOpened ? 'menu-toggle-button active' : 'menu-toggle-button'}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </button>
    )
}
