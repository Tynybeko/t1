import React from 'react'
import { useParams } from 'react-router'
import { contactData } from './Contacts'

export default function SingleContact() {
    const params = useParams()

    return (
        <div>
            SingleContact


            params:
            {
                JSON.stringify(params)
            }
            {
                JSON.stringify(contactData.find(el => el.id == params.id))
            }


        </div>
    )
}
