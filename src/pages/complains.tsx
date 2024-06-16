import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Complains = () => {
    const router = useRouter()

    useEffect(()=>{
        router.push("https://pgportal.gov.in/")
    })

    return (
        <div className='text-center'>
            You are being redirected to complains portal
        </div>
    )
}

export default Complains
