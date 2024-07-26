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
        <div className='flex flex-col md:py-0 py-4 space-y-3'>
            <p className='text2xl md:text-2xl font-extrabold capitalize'>{title}</p>
            <p className='font-semibold'>{desc}</p>
            <p className='text-lg font-bold'>₹ {price}</p>
            <ProductKartButton item={item} />
        </div>
    )
}

export default ProductText
