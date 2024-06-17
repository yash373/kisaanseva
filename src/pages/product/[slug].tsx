import React from 'react'
import { GetServerSideProps } from 'next'
import { GetStaticProps } from 'next'
import { GetStaticPaths } from "next"
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
    <div className='flex md:flex-row flex-col space-x-5 justify-center items-center'>
      {/* <Logo /> */}
      <ProductImage image={item.image} />
      <ProductText item={item} desc={item.desc} price={item.price} title={item.title} />
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://kisaanseva.vercel.app/api/getData')
  const data = await res.json()
  const items: ItemProps[] = data["data"]

  // Get the paths we want to pre-render based on posts
  const paths = items.map((item) => ({
    params: { slug: item.slug },
  }))
 
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ item: ItemProps }> = async (context) => {
  const res = await fetch("https://onlyfarmers.vercel.app/api/getData")
  const data = await res.json()

  const slug = context.params?.slug as string

  const items: ItemProps[] = data["data"]

  const item: ItemProps = items.filter(i => i.slug == slug)[0]

  console.log(item)

  return { props: { item } }
}

export default Product
