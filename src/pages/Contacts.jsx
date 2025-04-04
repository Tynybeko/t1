import React from 'react'
import { Link } from 'react-router'

export const contactData = [
    {
        id: 1,
        title: 'Sadatoy',
        num: '+996700010101'
    },
    {
        id: 2,
        title: 'Abubakir',
        num: '+996777909090'
    },
    {
        id: 3,
        title: 'Argen',
        num: '+996555988766'
    },
]

export default function Contacts() {
    return (
        <div >
            Contacts
            <hr />
            <ul className=''>
                {
                    contactData.map(el => (
                        <li className='border-b border-red-300 hover:border-red-800'>
                            <Link to={`/contacts/${el.id}`}>
                                {el.title} : {el.num}
                            </Link>
                        </li>

                    ))
                }
            </ul>

        </div>
    )
}
