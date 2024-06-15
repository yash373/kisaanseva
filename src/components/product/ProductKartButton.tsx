import React, { useEffect, useState } from 'react'
import { kart } from '@/pages/_app'
import { useAtom } from 'jotai'
import { ItemProps } from '@/pages/_app'

interface ProductKartButtonProps {
    item: ItemProps
}

const ProductKartButton = ({ item }: ProductKartButtonProps) => {
    const [inKart, setInKart] = useState<boolean>(false)
    const [kartItems, setKartItems] = useAtom<ItemProps[]>(kart)

    useEffect(() => {
        for (let kartItem of kartItems){
            if(kartItem.slug == item.slug){
                setInKart(true)
            }
        }
        console.log(kartItems)
    }, [kartItems, setInKart])

    const addToKart = () => {
        // clone kart items
        let temp: ItemProps[] = kartItems
        temp.push(item)

        // change state
        setInKart(true)

        // setKartItems
        setKartItems(temp)

        console.log(kartItems)
    }

    const removeFromKart = () => {
        // clone kart items
        let temp: ItemProps[] = kartItems
        let itemIndex: number = temp.indexOf(item)

        temp.splice(itemIndex, 1)

        // change state
        setInKart(false)

        // setKartItems
        setKartItems(temp)

        console.log(kartItems)
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
