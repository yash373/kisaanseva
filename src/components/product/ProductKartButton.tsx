import React, { useEffect, useState } from 'react'
import { kart } from '@/atoms/kart'
import { useAtom } from 'jotai'
import { ItemProps } from '@/pages/_app'

interface ProductKartButtonProps {
    item: ItemProps
}

const ProductKartButton = ({ item }: ProductKartButtonProps) => {
    const [inKart, setInKart] = useState<boolean>(false)
    const [kartItems, setKartItems] = useAtom(kart)

    useEffect(() => {
        if (kartItems.includes(item)) {
            setInKart(true)
        }
    })

    const addToKart = () => {
        // clone kart items
        let temp: ItemProps[] = kartItems
        temp.push(item)

        // setKartItems
        setKartItems(temp)

        // change state
        setInKart(true)
    }

    const removeFromKart = () => {
        // clone kart items
        let temp: ItemProps[] = kartItems
        let itemIndex: number = temp.indexOf(item)

        temp.splice(itemIndex, 1)

        // setKartItems
        setKartItems(temp)

        // change state
        setInKart(false)
    }

    return (
        <>
            {inKart &&
                <button className='flex md:p-2 p-4 bg-green-400 rounded-md font-semibold' onClick={() => { removeFromKart() }}>Remove from Kart 🗑</button>
            }
            {!inKart &&
                <button className='flex md:p-2 p-4 bg-green-600 rounded-md font-semibold' onClick={() => { addToKart() }}>Add to Kart 🛒</button>
            }
        </>
    )
}

export default ProductKartButton
