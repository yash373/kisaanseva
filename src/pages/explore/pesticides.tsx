import React, { useEffect } from 'react'
import Item from '@/components/explore/Item'
import { ItemProps } from '../_app'
import Heading from '@/components/explore/Heading'

const category: string = "pesticides"

export interface ExporeProps {
  items: ItemProps[]
}

const Pesticides = ({ items }: ExporeProps) => {
  useEffect(() => {
    console.log(items)
  })

  return (
    <div className='flex flex-col w-full h-full'>
      <Heading text={"Pesticides 🧪"} />
      <div className="flex flex-col pb-5">
        {items.map((item: ItemProps) => <Item desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://onlyfarmers.vercel.app/api/getData")
  const data = await res.json()

  const parsedData: ItemProps[] = data["data"]
  const items: ItemProps[] = parsedData.filter(item => item.category == category)

  return { props: { items } }
}

export default Pesticides
