import React, { ReactElement } from 'react'
import Link from "next/link"

interface SidebarIconProps {
    icon: ReactElement,
    text: string,
    link: string,
    color: string
}

const SidebarIcon = ({ icon, text, link, color }: SidebarIconProps) => {
    return (
        <Link className='relative flex items-center justify-center 
               h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
               bg-gray-800 text-green-500
               hover:bg-green-600 hover:text-white
               rounded-3xl hover:rounded-xl
               transition-all duration-300 ease-linear
               cursor-pointer; group' href={link}>
            {icon}
            <span className="absolute w-auto p-2 m-2 min-w-max left-14
        rounded-md shadow-md
        text-white bg-gray-900 
        text-xs font-bold
        transition-all duration-100 scale-0 origin-left; group-hover:scale-100">{text}</span>
        </Link>
    )
}

export default SidebarIcon