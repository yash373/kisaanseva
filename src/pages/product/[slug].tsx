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

export const getStaticPaths = (async () => {
  const res = await fetch("https://onlyfarmers.vercel.app/api/getData")
  const data = await res.json()
  const items: ItemProps[] = data["data"]

  let slugs: string[] = []

  for (let item of items) {
    slugs.push(item.slug)
  }

  interface param {
    slug: string
  }

  interface path {
    params: param
  }

  let PATHS:path[] = []

  for (let slug of slugs){
    PATHS.push({params:{slug}})
  }

  return {
    paths: PATHS,
    fallback: true, // false or "blocking"
  }
})

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
