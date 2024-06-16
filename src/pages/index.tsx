import React from "react"
import Image from 'next/image'
import Text from '@/components/about/Text'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      {/* <Logo /> */}
      <div className='md:space-x-5 sm:space-y-5 md:mb-10 flex flex-col md:flex-row my-auto'>
        <Image className='my-auto mx-auto md:w-[50%] rounded-md' src={"/farmer.jpg"} width={500} height={500} alt='farmer-image' />
        <Text />
      </div>
    </div>
  )
}

export default Home
