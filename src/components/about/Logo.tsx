import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='flex md:w-[50%] h-[25vh] mx-auto'>
            <img className='mx-auto' src={"/OnlyFarmers.png"} alt='logo' />
        </div>
    )
}

export default Logo
