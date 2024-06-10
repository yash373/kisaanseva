import React from 'react'

export interface ItemPriceProps {
    price: number
}

const ItemPrice = ({ price }: ItemPriceProps) => {
    return (
        <div className='font-semibold text-lg'>
            ₹ {price}
        </div>
    )
}

export default ItemPrice
