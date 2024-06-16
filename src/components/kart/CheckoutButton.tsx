import React from 'react'
import Link from "next/link"

const CheckoutButton = () => {
  return (
    <Link className='mx-auto m-2' href={"/checkout"}>
      <button className='flex md:p-2 p-4 bg-green-400 hover:bg-green-700 rounded-md font-semibold'>Buy Now 🎃</button>
    </Link>
  )
}

export default CheckoutButton
