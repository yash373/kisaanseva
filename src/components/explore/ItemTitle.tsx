import React from 'react'

export interface ItemTitleProps {
    title: string
}

const ItemTitle = ({ title }: ItemTitleProps) => {
    return (
        <p className='font-semibold capitalize text-xl'>
            {title}
        </p>
    )
}

export default ItemTitle
