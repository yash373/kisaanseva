import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Page from '@/components/reroute/Page'

const Complains = () => {
    const router = useRouter()

    const reroute = () => {
        router.push("https://pgportal.gov.in/")
    }

    return (
        <Page img='https://play-lh.googleusercontent.com/vP-3MkbstLaBJoyBtdSrbUT8K42THwmfannJzD-nXUXyw3FMp7vs6Qr3nSGGu2Db3Q' title='File Your Complaint' operation={reroute} />
    )
}

export default Complains
