import React from 'react'
import { GetServerSideProps } from 'next'
import { ItemProps } from '../_app'
import ProductImage from '@/components/product/ProductImage'
import ProductText from '@/components/product/ProductText'

export interface ProductProps {
  item: ItemProps
}

const Product = ({ item }: ProductProps) => {
  return (
    <div className='flex flex-col space-x-0 md:space-x-2 space-y-2 md:space-y-0 md:flex-row w-full'>
      <ProductImage image={item.image} />
      <ProductText desc={item.desc} price={item.price} title={item.title} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{ item: ItemProps }> = async (context) => {
  const res = await fetch("https://onlyfarmers.vercel.app/api/getData")
  const data = await res.json()

  const slug = context.query["slug"]

  const items: ItemProps[] = data["data"]

  const item: ItemProps = items.filter(i => i.slug == slug)[0]

  console.log(item)

  return { props: { item } }
}

export default Product
