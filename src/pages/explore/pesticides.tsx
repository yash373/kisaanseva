import React, { useEffect } from 'react'
import Item from '@/components/explore/Item'
import Heading from '@/components/explore/Heading'

const category: string = "pesticides"

export interface Item {
  image: string,
  title: string,
  price: number,
  category: string,
  desc: string
}

export interface ExporeProps {
  items: Item[]
}

const Pesticides = ({ items }: ExporeProps) => {
  useEffect(() => {
    console.log(items)
  })

  return (
    <div className='flex flex-col w-full h-full'>
      <Heading text={"Pesticides 🧪"} />
      <div className="flex flex-col pb-5">
        {items.map((item: Item) => <Item desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://onlyfarmers.vercel.app/api/getData")
  const data = await res.json()

  const parsedData: Item[] = data["data"]
  const items: Item[] = parsedData.filter(item => item.category == category)

  return { props: { items } }
}

export default Pesticides
