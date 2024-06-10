import React from 'react'

export interface ItemTitleProps {
    title: string
}

const ItemTitle = ({ title }: ItemTitleProps) => {
    return (
        <div>
            {title}
        </div>
    )
}

export default ItemTitle
