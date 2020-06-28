import React, {createContext, useContext} from 'react';
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { Cursor } from "../Cursor";

import './App.css';

import { data } from "../../data";

const AppContext = createContext();

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpened: false,
            data
        }
    }

    toggleMenu = () => {
        document.body.classList.toggle("no-sroll");
        this.setState(state => {
            return {...state, menuIsOpened: !state.menuIsOpened}
        })
    }

    render() {
        const { menuIsOpened, data } = this.state;
        return (
            <AppContext.Provider value={{
                data,
                menuIsOpened,
                toggleMenu: this.toggleMenu
            }}>
                <div className="app">
                    <Cursor />
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </AppContext.Provider>
        );
    }

}

export const useAppContext = () => useContext(AppContext);
