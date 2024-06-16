import React from 'react'
import Link from 'next/link'

interface SchemeProps {
    name: string,
    link: string,
    desc: string,
}

const Scheme = ({ name, desc, link }: SchemeProps) => {
    return (
        <Link target='_blank' href={link} className='border-2 w-full -ml-2 h-full md:h-[5vh] rounded-md border-black flex text-center space-x-2 hover:text-green-500'>
            <p className='ml-2 font-semibold'>{name}:</p>
            <p className='font-light'>{desc}</p>
        </Link>
    )
}

export default Scheme
