import React, { useEffect } from 'react'
import Item from '@/components/explore/Item'
import Heading from '@/components/explore/Heading'

export interface Item {
  image: string,
  title: string,
  price: number,
  desc: string
}

export interface ExporeProps {
  items: [Item]
}

const Tools = ({ items }: ExporeProps) => {
  useEffect(() => {
    console.log(items)
  })

  return (
    <div className='flex flex-col w-full h-full'>
      <Heading text={"Tools ⛏"} />
      <div className="flex flex-col">
        {items.map((item: Item) => <Item desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
        {items.map((item: Item) => <Item desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
        {items.map((item: Item) => <Item desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
        {items.map((item: Item) => <Item desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const items: [Item] = [
    {
      "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
      "title": "shovel",
      "desc": "shovel",
      "price": 500
    }
  ]

  return { props: { items } }
}

export default Tools
