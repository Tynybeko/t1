import axios from 'axios'
import React from 'react'

export default function Card({ title, price, image, id, userId, setProducts }) {
    const handleDelete = () => {
        axios.delete(`https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/users/${userId}/products/${id}`)
            .then(res => {
                console.log('RELETED', res);
                setProducts(prev => prev.filter(item => item.id != res.data.id))
            })
    }



    return (
        <div className='flex-[1_1_200px] p-2 w-full'>
            <img src={image} alt="Image" />
            <h2>{title}</h2>
            <div>
                <p>{price}</p>
                <button className='py-2 bg-black text-white px-5 rounded-lg'>ADD</button>
                <button onClick={handleDelete} className='py-2 bg-red-300 cursor-pointer text-white px-5 rounded-lg'>DELETE</button>
            </div>

        </div>
    )
}
