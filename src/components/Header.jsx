import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import CartModal from './cart/CartModal'

export default function Header() {
    const cartContext = useContext(CartContext)
    const [isOpenCart, setOpenCart] = useState(false)
    return (
        <>
            <header className='shadow-sm bg-white fixed top-0 w-full flex justify-between py-2 items-center px-5'>
                <h1>LogoF</h1>
                <nav>
                    <ul className='flex gap-3 items-center'>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </nav>
                <div>
                    <button onClick={() => setOpenCart(prev => !prev)} className='group  py-2 px-5 bg-blue-300 hover:text-white rounded-lg cursor-pointer duration-300 hover:bg-blue-500 relative'>
                        Корзина
                        <span className='group-hover:bg-red-500 absolute duration-300 bg-red-100 w-5 h-5 text-xs text-center flex items-center justify-center rounded-full -top-2 -right-2'>
                            {cartContext?.cart?.length}
                        </span>
                    </button>
                </div>
            </header>
            {
                isOpenCart && <CartModal
                    setClose={() => setOpenCart(false)}
                />
            }
        </>

    )
}
