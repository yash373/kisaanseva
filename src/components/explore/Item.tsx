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
        <div className='flex my-auto h-auto w-full justify-center items-center text-left flex-col'>
            <ItemIMG img={image} />
            <ItemPrice price={price} />
            <ItemTitle title={title} />
            <ItemDesc desc={desc} />
        </div>
    )
}

export default Item
