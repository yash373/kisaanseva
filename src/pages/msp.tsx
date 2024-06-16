import React from 'react'
import { useRouter } from 'next/router'
import Page from '@/components/reroute/Page'

const MSP = () => {
    const router = useRouter()

    const reroute = () => {
        router.push("https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2003184")
    }
    
    return (
        <Page operation={reroute} img='https://cprindia.org/sites/default/files/news/CPR_news_header_template_44.jpg' title='Know Your Minimum Selling Price' />
    )
}

export default MSP
