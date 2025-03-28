import React, { useState } from 'react'
import Button from './UI/Button'
import LeftMainBar from './LeftMainBar'
import ReserveModal from './modals/ReserveModal'
import { Link } from 'react-router'

export default function Banner() {
    const [reserveModal, setReserveModal] = useState(false)


    const toggleReserveModal = () => {
        setReserveModal(prev => !prev)
    }

    return (
        <section className='banner'>
            {
                reserveModal ?
                    <ReserveModal onClose={toggleReserveModal} />
                    : null
            }
            <LeftMainBar openReserveModal={toggleReserveModal} />
            <header className='py-8 w-full justify-end flex pr-25'>
                <nav className='text-white flex gap-10 items-center'>
                    <Link to="/">Меню</Link>
                    <Link to="/delivery">Доставка</Link>
                    <Link to="/">Оплата</Link>
                    <Button onClick={toggleReserveModal} title="Бронь столика" />
                </nav>
            </header>
        </section>
    )
}
