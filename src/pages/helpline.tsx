import React from 'react'
import Association from '@/components/connecttomarket/Association'

const Helpline = () => {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <Association name='Uttar Pradesh' desc='2237617' link='tel:2237617' />
      <Association name='West Bengal' desc='2252-0619' link='tel:22520619' />
    </div>
  )
}

export default Helpline