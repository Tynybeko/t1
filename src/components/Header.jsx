import React, { useState } from 'react'
import { NavLink } from 'react-router'
const navData = [
    {
        id: 1,
        title: 'Главная',
        href: '/'
    },
    {
        id: 2,
        title: 'Контакты',
        href: '/contacts'
    },
]

export default function Header() {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className='py-5 w-full bg-violet-200 px-4 flex justify-between relative'>
            <h1 className='font-bold underline'>Logo</h1>
            <nav className={`hidden  sm:flex`}>
                <ul className='flex gap-2'>
                    {
                        navData.map(link => (
                            <NavLink className={({ isActive }) => {
                                const someClass = 'px-2 py-1.5 bg-blue-400 rounded-lg hover:bg-blue-700 duration-300 text-white'
                                if (isActive) return someClass + ' bg-blue-700 cursor-default'
                                return someClass
                            }} key={link.id} to={link.href}>
                                {link.title}
                            </NavLink>
                        ))
                    }
                </ul>
            </nav>

            <div className='hidden sm:flex'>
                d
            </div>
            <div onClick={() => setOpen(prev => !prev)} className='sm:hidden hover:text-blue-700 duration-300 cursor-pointer'>
                <svg class="feather feather-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
            </div>
            <nav className={`absolute flex items-center bg-gray-400 p-5 top-0 right-0 ${isOpen ? 'flex' : 'hidden'}`}>
                <div onClick={() => setOpen(prev => !prev)} className='sm:hidden hover:text-blue-700 duration-300 cursor-pointer'>
                    <svg class="feather feather-menu" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                </div>
                <ul className='flex gap-2'>
                    {
                        navData.map(link => (
                            <NavLink className={({ isActive }) => {
                                const someClass = 'px-2 py-1.5 bg-blue-400 rounded-lg hover:bg-blue-700 duration-300 text-white'
                                if (isActive) return someClass + ' bg-blue-700 cursor-default'
                                return someClass
                            }} key={link.id} to={link.href}>
                                {link.title}
                            </NavLink>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
