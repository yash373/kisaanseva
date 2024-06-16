import React from 'react'
import { GetServerSideProps } from 'next'
import { ItemProps } from '../_app'
import ProductImage from '@/components/product/ProductImage'
import ProductText from '@/components/product/ProductText'
import Heading from '@/components/explore/Heading'
import Logo from '@/components/about/Logo'

export interface ProductProps {
  item: ItemProps
}

const Product = ({ item }: ProductProps) => {
  return (
    <div className='flex md:flex-row flex-col h-[100vh] space-x-5 justify-center items-center'>
      {/* <Logo /> */}
      <ProductImage image={item.image} />
      <ProductText item={item} desc={item.desc} price={item.price} title={item.title} />
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
