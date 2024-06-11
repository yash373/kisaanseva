import React from 'react'
import ItemIMG from './ItemIMG'
import ItemTitle from './ItemTitle'
import ItemDesc from './ItemDesc'
import ItemPrice from './ItemPrice'

export interface ItemProps {
    image: string,
    title: string,
    desc: string,
    price: number
}

const Item = ({ image, title, desc, price }: ItemProps) => {
    return (
        <div className='flex w-[90vw] mx-auto h-auto justify-center text-left'>
            <ItemIMG img={image} />
            <div className='flex flex-col w-[75vw] mt-5'>
                <ItemTitle title={title} />
                <ItemPrice price={price} />
                <ItemDesc desc={desc} />
            </div>
        </div>
    )
}

export default Item
