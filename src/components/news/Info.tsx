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
        <Link href={link} target='_blank' className='flex flex-col mx-auto w-[70vw] h-full'>
            <img src={img} alt="info" />
            <Heading text={title} />
            <p>{para}</p>
        </Link>
    )
}

export default Info
