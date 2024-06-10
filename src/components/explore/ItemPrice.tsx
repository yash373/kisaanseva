import React from 'react'

export interface ItemPriceProps {
    price: number
}

const ItemPrice = ({ price }: ItemPriceProps) => {
    return (
        <div>
            ₹ {price}
        </div>
    )
}

export default ItemPrice
