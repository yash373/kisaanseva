import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='flex md:w-[50%] mx-auto mb-auto'>
            <Image className='mx-auto' width={250} height={250} src={"/OnlyFarmers.png"} alt='logo' />
        </div>
    )
}

export default Logo
