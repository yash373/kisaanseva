import React from 'react'
import { ItemProps } from './_app'
import Heading from '@/components/explore/Heading'
import { useAtom } from 'jotai'
import { kart } from './_app'
import Item from '@/components/explore/Item'
import CheckoutButton from '@/components/kart/CheckoutButton'

const Kart = () => {
  const [kartItems, setKartItems] = useAtom(kart)

  return (
    <div className='flex flex-col w-full h-full'>
      <Heading text={"Kart 🛒"} />
      {
        kartItems && <div className="flex space-y-5 flex-col pb-5">
          {kartItems.map((item: ItemProps) => <Item category={item.category} slug={item.slug} desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
        </div>
      }
      <CheckoutButton />
    </div>
  )
}

export default Kart
