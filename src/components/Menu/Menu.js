import React from "react";
import './Menu.css';

export const Menu = () => {
    return (
        <div className='app-menu'>
            <div className='app-menu__inner'>
                <div className='app-menu__categories-wrap'>
                    <ul className='app-menu__categories'>
                        <li className='app-menu__category'>
                            <a href="" className='link menu'>Широкоформатная печать</a>
                        </li>
                        <li className='app-menu__category'>
                            <a href="" className='link menu'>Ультрафиолетовая печать</a>
                        </li>
                        <li className='app-menu__category'>
                            <a href="" className='link menu'>Наружная реклама</a>
                        </li>
                        <li className='app-menu__category'>
                            <a href="" className='link menu'>Конструкции</a>
                        </li>
                        <li className='app-menu__category'>
                            <a href="" className='link menu'>Полиграфия</a>
                        </li>
                        <li className='app-menu__category'>
                            <a href="" className='link menu'>Дизайн</a>
                        </li>
                        <li className='app-menu__category'>
                            <a href="" className='link menu'>Контакты</a>
                        </li>
                    </ul>
                    <ul className='app-menu__subcategories'>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Лайтбоксы</a>
                        </li>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Объёмные буквы</a>
                        </li>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Вывески</a>
                        </li>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Штендеры</a>
                        </li>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Каркасы</a>
                        </li>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Монтаж</a>
                        </li>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Фрезерная порезка</a>
                        </li>
                        <li className='app-menu__subcategory'>
                            <a href="" className='link menu'>Лазерная порезка</a>
                        </li>
                    </ul>
                </div>
                <div className='app-menu__list'>
                    <div className='app-menu__list-item'>
                        <ul>
                            <li><a className='link menu' href="">facebook</a></li>
                            <li><a className='link menu' href="">telegram</a></li>
                            <li><a className='link menu' href="">viber</a></li>
                        </ul>
                    </div>
                    <div className='app-menu__list-item'>
                        <ul>
                            <li>
                                <a className='link menu' href="tel:099 000 1 345">099 000 1 345</a>
                            </li>
                            <li>
                                <a className='link menu' href="tel:099 000 1 345">099 000 1 345</a>
                            </li>
                            <li>
                                <a className='link menu' href="tel:099 000 1 345">099 000 1 345</a>
                            </li>
                        </ul>
                    </div>
                    <div className='app-menu__list-item'>
                        <ul>
                            <li>Киев, Украина</li>
                            <li>Саксаганского, 6а</li>
                            <li>10:00 — 22:00, каждый день</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
