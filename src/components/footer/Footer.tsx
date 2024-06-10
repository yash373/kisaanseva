import React from 'react'
import { IoMdHome } from "react-icons/io";
import Link from 'next/link';

const Footer = () => {
    return (
        <Link href={"/navigation"} className='w-full mt-auto h-[10vh] bottom-0 fixed flex bg-slate-700'>
            <p className='text-center mx-auto my-auto text-xl'>
                <IoMdHome />
            </p>
        </Link>
    )
}

export default Footer
