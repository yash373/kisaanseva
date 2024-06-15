import React from 'react'
import Link from 'next/link'

interface ItemButtonProps {
    slug: string
}

const ItemButton = ({ slug }: ItemButtonProps) => {
    return (
        <Link href={`/product/${slug}`}>
            <button className='flex md:p-2 p-4 bg-green-400 rounded-md font-semibold'>
                Checkout ☝
            </button>
        </Link>
    )
}

export default ItemButton
