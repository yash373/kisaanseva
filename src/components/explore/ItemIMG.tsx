import React from 'react'

export interface ItemIMGProps {
    img: string
}

const ItemIMG = ({ img }: ItemIMGProps) => {
    return (
        <img className='' src={img} alt="itemimg" />
    )
}

export default ItemIMG
