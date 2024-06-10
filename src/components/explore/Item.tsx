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
        <div className='flex flex-col'>
            <ItemIMG img={image} />
            <ItemTitle title={title} />
            <ItemDesc desc={desc} />
            <ItemPrice price={price} />
        </div>
    )
}

export default Item
