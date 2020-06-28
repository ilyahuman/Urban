import React from "react";
import './Card.css';
import { splitList } from "../../helper/splitList";

export const Card = ({ title, links }) => {
    const groups = splitList([].concat(links), 5);

    return (
        <div className='card-item'>
            <div className='card-item__inner'>
                <div className='card-item__side card-item__front'>
                <span className='card-item__front-title'>
                    {title}
                </span>
                </div>
                <div className='card-item__side card-item__back'>
                    {
                        groups.map((list, index) => {
                            return (
                                <ul key={index}>
                                    {list.map((link, index) => {
                                        return <li key={index}><a className='link common' href={link.url}>{link.title}</a></li>
                                    })}
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}