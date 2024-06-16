import React from 'react'
import Link from 'next/link'

interface SchemeProps {
    name: string,
    link: string,
    desc: string,
    img: string,
}

const Scheme = ({ name, desc, link, img }: SchemeProps) => {
    return (
        <Link target='_blank' href={link} className='border-2 flex-col w-full -ml-2 h-full rounded-md border-black flex hover:text-green-500'>
            <img className='mx-auto text-xl h-[50vh] w-[50vw]' src={img} alt='schemeimg' />
            <div className='flex space-x-2 text-lg'>
                <p className='ml-2 font-semibold'>{name}:</p>
                <p className='font-light'>{desc}</p>
            </div>
        </Link>
    )
}

export default Scheme
