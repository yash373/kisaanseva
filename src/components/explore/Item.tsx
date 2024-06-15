import React from 'react'
import ItemIMG from './ItemIMG'
import ItemTitle from './ItemTitle'
import ItemDesc from './ItemDesc'
import ItemPrice from './ItemPrice'
import { ItemProps } from '@/pages/_app'
import ItemButton from './ItemButton'

const Item = ({ image, title, desc, price, slug }: ItemProps) => {
    return (
        <div className='flex w-[90vw] h-[40vh] mx-auto justify-center text-left'>
            <ItemIMG img={image} />
            <div className='flex flex-col w-[75vw] mt-5'>
                <div className='flex flex-col'>
                    <ItemTitle title={title} />
                    <ItemPrice price={price} />
                    <ItemDesc desc={desc} />
                </div>
                <div className='flex mt-4'>
                    <ItemButton slug={slug} />
                </div>
            </div>
        </div>
    )
}

export default Item
