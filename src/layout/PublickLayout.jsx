import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function PublickLayout() {
    return (
        <div className='container mx-auto overflow-x-hidden flex flex-col min-h-screen'>
            <Header />
            <main className='flex-1'>
                <Outlet />

            </main>
            <Footer />
        </div>
    )
}
