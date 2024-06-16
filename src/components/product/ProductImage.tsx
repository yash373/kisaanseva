import React from 'react'

interface ProductImageProps {
    image: string
}

const ProductImage = ({ image }: ProductImageProps) => {
    return (
        <img className='w-[30vw] h-[30vw]' src={image} alt="productImage" />
    )
}

export default ProductImage
