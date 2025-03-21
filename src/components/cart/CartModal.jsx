import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import Card from '../products/Card'

export default function CartModal({ setClose }) {
    const cartContext = useContext(CartContext)


    return (
        <div className='fixed right-0 w-full bg-white top-15 rounded-s-lg max-w-sm shadow-md h-[calc(100vh-60px)]'>
            <div className='flex w-full justify-between border-b-2 border-gray-300 px-5 items-center'>
                <h1 className='text-xl py-3 '>Cart</h1>
                <button onClick={setClose} className='rounded-lg px-3 py-1 text-center font-bold flex items-center justify-center cursor-pointer bg-gray-100'>x</button>
            </div>
            <div className='flex flex-wrap h-full pb-5 overflow-y-auto'>
                {
                    cartContext?.cart.map(product => (
                        <Card
                            key={product.id}
                            addCart={cartContext?.addCart}
                            removeCart={cartContext?.removeCart}
                            isCart={cartContext?.hasCart(product)}
                            product={product}
                        />
                    ))
                }
                {
                    cartContext?.cart && cartContext.cart.length == 0 &&
                    <div className='w-full h-full flex justify-center items-center'>
                        <h1 className='underline text-blue-700 text-xl font-medium'>Корзина пока пустая</h1>
                    </div>
                }
            </div>


        </div>
    )
}
