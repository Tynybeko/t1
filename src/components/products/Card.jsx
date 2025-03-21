import React from 'react'

export default function Card({ product, isCart, addCart, removeCart }) {
    const toggleCart = () => {
        if (isCart) return removeCart?.(product)
        addCart?.(product)
    }

    return (
        <div className="flex-[1_0_350px] m-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={product.image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}</p>
                <button onClick={e => {
                    e.stopPropagation()
                    toggleCart()
                }} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${isCart ? 'bg-red-700  hover:bg-red-800' : "bg-blue-700  hover:bg-blue-800"}  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                    {
                        isCart ? 'В корзине' : 'В корзину'
                    }
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>

    )
}
