import React from 'react'
import Item from '@/components/explore/Item'

export interface Item {
  image: string,
  title: string,
  price: number,
  desc: string
}

const Tools = () => {
  return (
    <div>
      Buy tools here
    </div>
  )
}

export async function getServerSideProps() {  
  const data: [Item] = [
    {
      "image":"https://th.bing.com/th/id/R.8e7c74473fe968ade654d5173e0651bd?rik=ujZJYAcQ%2fDaSxg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshovel-hd-png-shovel-transparent-png-image-2412.png&ehk=JlIIavrGVLZvsrU8WJnBsKfi%2bbkOjpl%2bYmBpisqK4S0%3d&risl=&pid=ImgRaw&r=0",
      "title":"shovel",
      "desc":"shovel",
      "price":500
    }
  ]

  return { props: { data } }
}

export default Tools
