import React from 'react'

export default function MainContent(props) {
    return (
        <div>
            <h4 className='pre_title'>{props.preTitle}</h4>
            <div className='flex mt-[87px] justify-between flex-wrap max-w-[856px] w-full'>
                <div className='flex items-center justify-center text-center'>
                    <h2 className='text-4xl font-bold max-w-40'>{props.title}</h2>
                </div>
                <p className='flex-[0_1_526px]'>{props.description}</p>
            </div>
            {
                props.children
            }
        </div>
    )
}
