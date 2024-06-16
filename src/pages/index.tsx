import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  // useEffect(()=>{
  //   router.push("/navigation")
  // })

  return (
    <div>
      home page
    </div>
  )
}

export default Home
