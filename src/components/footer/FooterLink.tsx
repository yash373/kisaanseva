import React, { ReactElement } from 'react'
import Link from 'next/link'

interface FooterLinkProps {
    title: string,
    link: string,
    plain: boolean,
    icon: ReactElement
}

const FooterLink = ({ title, link = "", plain = false, icon }: FooterLinkProps) => {
    return (
        <>
            {!plain && <Link className='flex justify-center items-center space-x-1 hover:text-green-500 font-semibold' href={link}>
                {icon}
                <div>
                    {title}
                </div>
            </Link>}
            {plain && <div className='flex justify-center items-center space-x-1 hover:text-green-500 font-semibold'>
                {icon}
                <div>
                    {title}
                </div>
            </div>}
        </>
    )
}

export default FooterLink
