import React from 'react'

interface ProductImageProps {
    image: string
}

const ProductImage = ({ image }: ProductImageProps) => {
    return (
        <img className='md:w-[50vw] w-[95vw] border-2 border-slate-600 h-[30vh] md:h-[30vw]' src={image} alt="productImage" />
    )
}

export default ProductImage
