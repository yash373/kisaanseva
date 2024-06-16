import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const SellProduce = () => {
    const router = useRouter()

    useEffect(()=>{
        router.push("https://enam.gov.in/web/stakeholders-Involved/farmers")
    })

    return (
        <div className='text-center'>
            you are being directed to government website for selling produce
        </div>
    )
}

export default SellProduce
