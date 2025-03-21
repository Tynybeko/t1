import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../Loading'
import Card from './Card'
import CartContext from '../../context/CartContext'



export default function Products() {
    const cartContext = useContext(CartContext)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get(`https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/products`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className='h-screen pt-15 w-full overflow-y-auto flex flex-wrap px-5'>
            {
                loading && <Loading />
            }
            {
                data && data.map(product => (
                    <Card
                        key={product.id}
                        addCart={cartContext?.addCart}
                        removeCart={cartContext?.removeCart}
                        isCart={cartContext?.hasCart?.(product)}
                        product={product} />
                ))
            }

        </div>
    )
}
