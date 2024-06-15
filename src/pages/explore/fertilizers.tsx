import React, { useEffect } from 'react'
import { ItemProps } from '../_app'
import Item from '@/components/explore/Item'
import Heading from '@/components/explore/Heading'

const category: string = "fertilizers"

export interface ExporeProps {
  items: ItemProps[]
}

const Fertilizers = ({ items }: ExporeProps) => {
  useEffect(() => {
    console.log(items)
  })

  return (
    <div className='flex flex-col w-full h-full'>
      <Heading text={"Fertilizers 💉"} />
      <div className="flex flex-col space-y-5 pb-5">
        {items.map((item: ItemProps) => <Item category={item.category} slug={item.slug} desc={item.desc} image={item.image} price={item.price} title={item.title} key={0} />)}
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

export default Fertilizers
