import React from "react";
import { useAppContext } from '../App';
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { MenuButton } from './MenuButton';

import './Header.css';

export const Header = () => {
    const { menuIsOpened, toggleMenu } = useAppContext();

    return (
        <header className='app-header'>
            {menuIsOpened ? <Menu /> : ''}

            <div className='app-header__phone'>+38 099 000 2 111</div>
            <Logo />
            <MenuButton menuIsOpened={menuIsOpened} toggleMenu={toggleMenu} />
        </header>
    )
}
