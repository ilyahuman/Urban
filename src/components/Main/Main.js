import React from "react";
import './Main.css';
import { CardList } from '../Cards';

export const Main = () => {
    return (
        <main className='app-main'>
            <div className='container'>
                <section className='app-main__info'>
                    <h2 className='block-title app-main__info-title'>Что мы делаем</h2>
                    <p className='app-main__info-text'>
                        Urbanprint работает на рынке широкоформатной печати уже 8 лет.
                        За эти годы мы создали тонны рекламной продукции и не собираемся останавливаться на этих цифрах.
                        С нашей помощью вы сможете оформить свой бизнес от визиток и листовок до витрин и билбордов. Давайте посмотрим, что мы можем для вас сделать.
                    </p>
                </section>
                <section>
                    <CardList />
                </section>
            </div>
        </main>
    )
}
