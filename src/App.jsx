import React, { useEffect, useState } from 'react'
import CartContext from './context/CartContext.js'
import Header from './components/Header.jsx'
import Products from './components/products/Products.jsx'
import CartModal from './components/cart/CartModal.jsx'

export default function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const oldData = localStorage.getItem('cart')
    if (oldData) {
      setCart(JSON.parse(oldData))
    }
  }, [])


  const addCart = (item) => {
    setCart(prev => {
      let newData = [...prev, item]
      localStorage.setItem('cart', JSON.stringify(newData))
      return newData
    })
  }

  const removeCart = (item) => {
    setCart(prev => {
      const newData = prev.filter(el => el.id != item.id)
      localStorage.setItem('cart', JSON.stringify(newData))
      return newData
    })
  }

  const hasCart = (item) => cart.some(el => el?.id == item.id)




  return (
    <CartContext.Provider value={{
      addCart,
      removeCart,
      hasCart,
      cart,
    }}>
      <main className='flex flex-col'>
        <Header />
        <Products />
      </main>

    </CartContext.Provider>
  )
}
