import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Page from '@/components/reroute/Page'

const SellProduce = () => {
    const router = useRouter()

    const reroute = () => {
        router.push("https://enam.gov.in/web/stakeholders-Involved/farmers")
    }

    return (
        <Page img='https://images.deccanchronicle.com/dc-Cover-7mksolq65p1nq81hm0cjfo09l3-20190302010500.Medi.jpeg' title='Sell your produce' operation={reroute} />
    )
}

export default SellProduce
