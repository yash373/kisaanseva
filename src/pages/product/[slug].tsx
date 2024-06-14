import React from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

export interface Item {
  image: string,
  title: string,
  price: number,
  category: string,
  desc: string
}

export interface ProductProps {
  items: Item[]
}

const Product = ({ items }: ProductProps) => {
  const router = useRouter()
  const slug = router.query.slug

  return (
    <div>
      {slug}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{ items: Item[] }> = async (context) => {
  const res = await fetch("https://onlyfarmers.vercel.app/api/getData")
  const data = await res.json()

  const items: Item[] = data["data"]

  return { props: { items } }
}

export default Product
