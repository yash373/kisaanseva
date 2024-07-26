import React from 'react'
import Heading from '../languageselection/Heading'
import Link from 'next/link'

interface InfoProps {
    img: string,
    title: string,
    para: string,
    link: string
}

const Info = ({ img, title, para, link }: InfoProps) => {
    return (
        <Link href={link} target='_blank' className='space-y-3 rounded-md border-2 border-gray-200 p-2 flex flex-col mx-auto w-[70vw] h-full'>
            <img className='h-full' src={img} alt="info" />
            <Heading text={title} />
            <p>{para}</p>
        </Link>
    )
}

export default Info
