import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const MSP = () => {
    const router = useRouter()

    useEffect(()=>{
        router.push("https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2003184")
    })
    
    return (
        <div>
            you are currently being redirected to another website
        </div>
    )
}

export default MSP
