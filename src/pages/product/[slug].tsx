import React from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { ItemProps } from '../_app'

export interface ProductProps {
  items: ItemProps[]
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

export const getServerSideProps: GetServerSideProps<{ items: ItemProps[] }> = async (context) => {
  const res = await fetch("https://onlyfarmers.vercel.app/api/getData")
  const data = await res.json()

  const items: ItemProps[] = data["data"]

  return { props: { items } }
}

export default Product
