import React from 'react'

export interface ItemIMGProps {
    img: string
}

const ItemIMG = ({ img }: ItemIMGProps) => {
    return (
        <div className='w-[40vw] flex justify-center items-center h-full m-5'>
            <img className='h-full rounded-md' src={img} alt="itemimg" />
        </div>
    )
}

export default ItemIMG
