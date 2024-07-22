import React from "react"
import Image from 'next/image'
import Text from '@/components/about/Text'
import { translateText } from "./_app"
import { useEffect } from "react"

const Home = () => {
  const print = async() => {
    console.log(translateText("नमस्ते","en"))
  }

  useEffect(()=>{
    print()
  })
  
  return (
    <div className='flex flex-col md:flex-row md:space-x-5 h-full w-full'>
      <Image className='my-auto mx-auto md:w-[50%] rounded-md' src={"/farmer.jpg"} width={500} height={500} alt='farmer-image' />
      <Text />
    </div>
  )
}

export default Home
