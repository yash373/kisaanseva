import React from 'react'

export interface ItemDescProps {
    desc: string
}

const ItemDesc = ({desc}: ItemDescProps) => {
  return (
    <div>
      {desc}
    </div>
  )
}

export default ItemDesc
