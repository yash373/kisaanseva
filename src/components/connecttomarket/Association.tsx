import React from 'react'
import Link from 'next/link'

interface AssociationProps {
    name: string,
    link: string,
    desc: string,
    img: string,
    big: boolean
}

const Association = ({ name, desc = "", link, img, big = false }: AssociationProps) => {
    return (
        <>
            {!big && <Link target='_blank' href={link} className='border-2 h-[65vh] my-2 flex-col w-full md:w-1/4 rounded-md border-black flex hover:text-green-500'>
                <img className='mx-auto text-xl h-[50vh] w-[50vw]' src={img} alt='schemeimg' />
                <div className='flex flex-col space-x-2 text-lg'>
                    <p className='ml-2 font-semibold'>{name}</p>
                    <p className='font-light'>{desc}</p>
                </div>
            </Link>}
            {big && <Link target='_blank' href={link} className='border-2 h-[80vh] my-2 flex-col w-full md:w-1/4 rounded-md border-black flex hover:text-green-500'>
                <img className='mx-auto text-xl h-[50vh] w-[50vw]' src={img} alt='schemeimg' />
                <div className='flex flex-col space-x-2 text-lg'>
                    <p className='ml-2 font-semibold'>{name}:</p>
                    <p className='font-light'>{desc}</p>
                </div>
            </Link>}
        </>
    )
}

export default Association
