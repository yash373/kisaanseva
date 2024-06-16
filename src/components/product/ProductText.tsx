import React from 'react'
import { ItemProps } from '@/pages/_app'
import ProductKartButton from './ProductKartButton'

interface ProductTextProps {
    title: string,
    desc: string,
    price: number,
    item: ItemProps
}

const ProductText = ({ title, desc, price, item }: ProductTextProps) => {
    return (
        <div className='flex flex-col w-full space-y-5'>
            <p className='text-3xl font-extrabold capitalize'>{title}</p>
            <p className='text-3xl font-semibold'>{desc}</p>
            <p className='text-3xl'>₹ {price}</p>
            <ProductKartButton item={item} />
        </div>
    )
}

export default ProductText
