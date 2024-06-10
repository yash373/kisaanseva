import React from 'react'

export interface ItemTitleProps {
    title: string
}

const ItemTitle = ({ title }: ItemTitleProps) => {
    return (
        <div className='font-semibold text-xl'>
            {title}
        </div>
    )
}

export default ItemTitle
