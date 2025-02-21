import React from 'react'
import Button from './UI/Button'
import LeftMainBar from './LeftMainBar'

export default function Banner() {
    return (
        <section className='banner'>
            <LeftMainBar />
            <header className='py-8 w-full justify-end flex pr-25'>
                <nav className='text-white flex gap-10 items-center'>
                    <a href="">Меню</a>
                    <a href="">Доставка</a>
                    <a href="">Оплата</a>
                    <Button title="Бронь столика" />
                </nav>
            </header>
        </section>
    )
}
