import React from "react"
import Image from 'next/image'
import Text from '@/components/about/Text'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row md:space-x-5 h-full w-full'>
      <Image className='my-auto mx-auto md:w-[50%] rounded-md' src={"/farmer.jpg"} width={500} height={500} alt='farmer-image' />
      <Text />
    </div>
  )
}

export default Home
