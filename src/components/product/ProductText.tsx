import React from 'react'

interface ProductTextProps {
    title: string,
    desc: string,
    price: number
}

const ProductText = ({ title, desc, price }: ProductTextProps) => {
    return (
        <div className='flex flex-col m-5'>
            <p className='text-3xl font-extrabold capitalize'>{title}</p>
            <p className='text-3xl font-semibold'>{desc}</p>
            <p className='text-3xl'>₹ {price}</p>
        </div>
    )
}

export default ProductText
