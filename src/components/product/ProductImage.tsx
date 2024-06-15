import React from 'react'

interface ProductImageProps {
    image: string
}

const ProductImage = ({ image }: ProductImageProps) => {
    return (
        <div className='flex m-2 w-[40vw]'>
            <img className='w-[40vw] rounded-md' src={image} alt="productImage" />
        </div>
    )
}

export default ProductImage
