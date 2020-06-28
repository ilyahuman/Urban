import React from "react";
import { useAppContext } from "../App";
import { Card } from './Card';
import './CardList.css';

export const CardList = () => {
    const { data } = useAppContext();

    return (
        <div className='app-main__cards'>
            {data.cards.map((link, index) => {
                return <Card key={index} title={link.title} links={link.links} />
            })}
        </div>
    )
}