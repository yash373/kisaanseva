import React from 'react'
import Association from '@/components/connecttomarket/Association'
import Heading from '@/components/explore/Heading'

const Helpline = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Heading text='Get Help 🔴' />
      <Association name='Uttar Pradesh' desc='2237617' link='tel:2237617' />
      <Association name='West Bengal' desc='2252-0619' link='tel:22520619' />
      <Association name='Madhya Pradesh' desc='1800 180 1551' link='tel:18001801551' />
      <Association name='Karnataka' desc='18004 253553' link='tel:18004253553' />
      <Association name='Maharashtra' desc='022-61316429' link='tel:02261316429' />
    </div>
  )
}

export default Helpline
