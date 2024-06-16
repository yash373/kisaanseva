import React from 'react'
import Link from 'next/link'

interface NavbarButtonProps {
    name: string,
    link: string
}

const NavbarButton = ({ name, link }: NavbarButtonProps) => {
    return (
        <Link className='font-semibold w-36 hover:bg-green-500 text-center rounded-md' href={link}>
            {name}
        </Link>
    )
}

export default NavbarButton
