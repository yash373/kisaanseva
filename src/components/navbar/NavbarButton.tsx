import React from 'react'
import Link from 'next/link'

interface NavbarButtonProps {
    name: string,
    link: string
}

const NavbarButton = ({ name, link }: NavbarButtonProps) => {
    return (
        <Link className='font-semibold flex w-36 hover:bg-green-500 text-center rounded-md' href={link}>
            <p className='my-auto mx-auto'>
                {name}
            </p>
        </Link>
    )
}

export default NavbarButton
