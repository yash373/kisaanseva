import React, { useEffect, useState } from 'react'
import { ItemProps } from './_app'
import Heading from '@/components/explore/Heading'
import { useAtom } from 'jotai'
import { kart } from './_app'
import Item from '@/components/explore/Item'
import CheckoutButton from '@/components/kart/CheckoutButton'

const Kart = () => {
  const [kartItems, setKartItems] = useAtom(kart)
  const [isKartEmpty, setIsKartEmpty] = useState(false)

  useEffect(() => {
    if (typeof kartItems !== 'undefined' && kartItems.length === 0) {
      setIsKartEmpty(true)
    }
  })

  return (
    <div className='flex flex-col w-full md:w-[90vw] h-full'>
      <Heading text={"Kart 🛒"} />
      {
        !isKartEmpty && <div className="flex space-y-5 flex-col pb-5">
          {kartItems.map((item: ItemProps) => <Item category={item.category} slug={item.slug} desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
          <CheckoutButton />
        </div>
      }
      {
        isKartEmpty && <div className='text-center font-semibold'>
          Your kart is empty
        </div>
      }
    </div>
  )
}

export default Kart
