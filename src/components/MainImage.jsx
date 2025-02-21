import React from 'react'

export default function MainImage(props) {
    return (
        <div className='flex flex-col gap-[64px] items-center'>
            <div className='border-[var(--accent-color)] border ' >
                <img className='object-cover translate-y-[40px] mx-10' width={336} height={240} src={props.image} alt="" />
            </div>
            <h2 className='pre_title'>{props.title}</h2>
        </div>
    )
}
