import React from 'react'
import Scheme from '@/components/governmentschemes/Scheme'

const GovernmentSchemes = () => {
  return (
    <div className='flex flex-col w-full'>
      <Scheme link='https://www.enam.gov.in/web/' name='E-NAM' desc="An online trading platform for agricultural communities in India" />
    </div>
  )
}

export default GovernmentSchemes
