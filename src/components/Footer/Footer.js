import React from "react";
import './Footer.css';
import { Button } from "../Button";

export const Footer = () => {

    return (
        <footer className='app-footer'>
            <div className='container'>
                <div className='app-footer__info'>
                    <h2 className='block-title app-footer__info-title'>Связаться с нами</h2>
                    <p className='app-footer__info-text'>
                        У нас работают очень милые консультанты, готовые ответить на ваши вопросы, помочь с подбором материала и типа печати и просчитать стоимость заказа
                    </p>
                    <Button theme='white' addClasses='effect' text='задать вопрос онлайн' />
                </div>
                <div className='app-footer__list'>
                    <div className='app-footer__list-item'>
                        <p className='app-footer__list-item-title'>Написать</p>
                        <ul>
                            <li><a className='link light' href="">facebook</a></li>
                            <li><a className='link light' href="">telegram</a></li>
                            <li><a className='link light' href="">viber</a></li>
                        </ul>
                    </div>
                    <div className='app-footer__list-item'>
                        <p className='app-footer__list-item-title'>Позвонить</p>
                        <ul>
                            <li>
                                <a className='link light' href="tel:099 000 1 345">099 000 1 345</a>
                            </li>
                            <li>
                                <a className='link light' href="tel:099 000 1 345">099 000 1 345</a>
                            </li>
                            <li>
                                <a className='link light' href="tel:099 000 1 345">099 000 1 345</a>
                            </li>
                        </ul>
                    </div>
                    <div className='app-footer__list-item'>
                        <p className='app-footer__list-item-title'>Прийти</p>
                        <ul>
                            <li>Киев, Украина</li>
                            <li>Саксаганского, 6а</li>
                            <li>10:00 — 22:00, каждый день</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
