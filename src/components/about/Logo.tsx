import React from 'react'
import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/"  className='flex w-full md:w-[25%] justify-center items-center space-x-2'>
            <p className='font-extrabold w-full text-4xl mb-4 uppercase'>KisaanSeva 👩‍🌾</p>
            {/* <p className='text-md w-full font-semibold mt-auto'> - Empowering Futures, Cultivating Futures.</p> */}
        </Link>
        // <img className='mx-auto md:-mt-14 md:-mb-10 h-32' src={"/OnlyFarmers.png"} alt='logo' />
    )
}

export default Logo
