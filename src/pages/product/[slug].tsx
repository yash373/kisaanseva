import React from 'react'
import { GetServerSideProps } from 'next'
import { ItemProps } from '../_app'
import ProductImage from '@/components/product/ProductImage'


export interface ProductProps {
  item: ItemProps
}

const Product = ({ item }: ProductProps) => {
  return (
    <div className='flex w-full'>
      <ProductImage image={item.image} />
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
