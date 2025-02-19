import React from 'react'

export default function Card({ name, isTrue }) {
    return (
        <div onClick={() => alert(name)} className='text-xl flex gap-5'>Card:
            <span
                className={`  underline ${isTrue ? 'text-blue-500' : 'text-red-500'}`}
            >{name}
            </span>
            <img
                className='hover:scale-150 duration-300 cursor-pointer' src="/svg/vite.svg" alt=""
            />

        </div>
    )
}

