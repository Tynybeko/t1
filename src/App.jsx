import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import axios from 'axios'



export default function App() {
  const [changedCategory, setChangeCategory] = useState(null)
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [errors, setErrors] = useState({
    productName: '',
    userId: ''
  })

  const [userId, setUserId] = useState('none')
  const [productName, setProductName] = useState('')
  const [createModal, setCreateModal] = useState(false)



  const handleSelectCategory = (id) => {
    setChangeCategory(id)
  }


  useEffect(() => {
    axios.get(`https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/users`)
      .then(data => setUsers(data.data))
  }, [])

  useEffect(() => {
    let url = `https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/`
    if (changedCategory === null) {
      url += 'products'
    } else {
      url += `users/${changedCategory}/products`
    }
    axios.get(url)
      .then(data => setProducts(data.data))
      .catch(err => console.log(err))
  }, [changedCategory])



  const handleSelect = (event) => {
    setUserId(event.target.value)
  }

  const handleCreate = () => {
    if (userId == 'none') return setErrors(prev => ({ ...prev, userId: 'Выберите пользователя' }));
    if (!productName.trim()) return setErrors(prev => ({ ...prev, productName: 'Введите название' }));
    axios.post(
      `https://67ab161165ab088ea7e899b5.mockapi.io/api/v1/products`,
      {
        title: productName,
        userId,
        price: 2000
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(data => {
        setProducts(prev => [data.data, ...prev])
        setCreateModal(false)
        setErrors({})
      })
  }

  return (
    <div>
      {
        createModal && <div className='absolute w-full h-screen flex justify-center items-center bg-black/60'>
          <div className='flex gap-5 p-2 border-b-2 bg-white rounded-lg p-6'>
            <div>
              <input value={productName} onChange={(e) => setProductName(e.target.value)} className='border' placeholder='Title' type="text" />
              <p className='text-red-500'>{errors.productName}</p>
            </div>
            <div>
              <select onChange={handleSelect} value={userId} >
                <option value={'none'}>Не выбрано</option>
                {
                  users.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))
                }
              </select>
              <p className='text-red-500'>{errors.userId}</p>
            </div>

            <button onClick={handleCreate} className='py-2 px-10 bg-blue-300 hover:bg-blue-600 duration-200 rounded-lg text-white font-bold cursor-pointer'>ADD</button>
            <button onClick={() => setCreateModal(false)} className='py-2 px-10 bg-red-300 hover:bg-red-600 duration-200 rounded-lg text-white font-bold cursor-pointer'>CANCEL</button>
          </div>
        </div>
      }

      <div className='flex gap-5 p-2 border-b-2'>
        <button onClick={() => setCreateModal(prev => !prev)} className='py-2 px-10 bg-blue-300 hover:bg-blue-600 duration-200 rounded-lg text-white font-bold cursor-pointer'>ADD</button>
      </div>
      <div className='flex gap-5 border-b-2 px-5 flex-wrap'>
        <p onClick={() => handleSelectCategory(null)} className={`text-red-300 hover:text-red-700 ${changedCategory === null ? 'text-red-700' : ''} duration-300 cursor-pointer`}>All</p>
        {
          users.map(item => (
            <p key={item.id} onClick={() => handleSelectCategory(item.id)} className={`text-red-300 hover:text-red-700 ${changedCategory == item.id ? 'text-red-700' : ''} duration-300 cursor-pointer`}>{item.name}</p>
          ))
        }
      </div>
      <div className='flex gap-4  flex-wrap '>
        {
          products.map(item => (
            <Card setProducts={setProducts} key={item.id} {...item} />
          ))
        }
      </div>

    </div>

  )
}
