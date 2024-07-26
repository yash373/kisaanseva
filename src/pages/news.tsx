import React from 'react'
import Heading from '@/components/explore/Heading'
import Info from '@/components/news/Info'

const News = () => {
    return (
        <div className='flex flex-col h-full w-full'>
            <Heading text='Latest News 📰' />
            <Info img={"https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/17/full/1721190621-2022.jpg?im=FitAndFill=(826,465)"} title='Budget 2024: Govt sets aside Rs 1.52 trn for agriculture, allied sectors' link='https://www.business-standard.com/budget/news/budget-2024-govt-sets-aside-rs-1-52-trn-for-agriculture-allied-sectors-124072300407_1.html' para='Union Finance Minister Nirmala Sitharaman, presenting the 2024 Union Budget today, announced a substantial allocation of Rs 1.52 lakh crore for agriculture and allied sectors in FY25. The Finance Minister added that over the next two years, 10 million farmers will be introduced to natural farming practices.' />
        </div>
    )
}

export default News
