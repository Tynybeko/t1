import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import PublickLayout from './layout/PublickLayout'
import Contacts from './pages/Contacts'
import SingleContact from './pages/SingleContact'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<PublickLayout />} >
        <Route index element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='contacts/:id' element={<SingleContact />} />
      </Route>
    </Routes>
  )
}
