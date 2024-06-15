import React, { useEffect } from 'react'
import Item from '@/components/explore/Item'
import { ItemProps } from '../_app'
import Heading from '@/components/explore/Heading'

const category: string = "tools"

export interface ExporeProps {
  items: ItemProps[]
}

const Tools = ({ items }: ExporeProps) => {
  useEffect(() => {
    console.log(items)
  })

  return (
    <div className='flex space-y-5 flex-col ml-auto w-full md:w-[95vw] h-full'>
      <Heading text={"Tools ⛏"} />
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

export default Tools
