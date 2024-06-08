import React from 'react'
import Link from 'next/link'

export interface ButtonProps {
    link: string,
    text: string,
    color: boolean
}

const Button = ({ link, text, color }: ButtonProps) => {
    return (
        <Link href={link}  className='font-semibold flex justify-center items-center my-auto w-full h-full text-center capitalize'>
            {color ? <p className='text-green-400'>
                {text}
            </p> : <p className='' >
                {text}
            </p>}
        </Link>
    )
}

export default Button
