import React from 'react'

const Variants = {
    bg: `bg-[var(--accent-color)] text-white`,
    initial: `bg-transparent border `
}

export default function Button(props) {
    let variant = props.variant ?? 'bg'

    return (
        <button onClick={props.onClick} className={`cursor-pointer py-2.5 px-5 ${Variants[variant]}`}>
            {props.title}
        </button>
    )
}

