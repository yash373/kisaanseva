import React from 'react'

export interface ItemDescProps {
    desc: string
}

const ItemDesc = ({desc}: ItemDescProps) => {
  return (
    <div className='font-light text-base'>
      {desc}
    </div>
  )
}

export default ItemDesc
