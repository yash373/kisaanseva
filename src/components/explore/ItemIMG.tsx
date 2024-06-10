import React from 'react'

export interface ItemIMGProps {
    img: string
}

const ItemIMG = ({ img }: ItemIMGProps) => {
    return (
        <img className='h-[50vh] w-[95vw] md:w-[40vw] m-5 mx-auto rounded-md' src={img} alt="itemimg" />
    )
}

export default ItemIMG
