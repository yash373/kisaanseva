import React from 'react'
import Button from '@/components/navigation/Button'

const Navigation = () => {
  return (
    <div className='flex flex-col w-full h-[95%] rounded-md divide-y bg-slate-800 md:w-[95%]'>
      <Button color={false} link='/explore/tools' text='buy tools' />
      <Button color={false} link='/explore/seeds' text='buy seeds' />
      <Button color={false} link='/explore/fertilizers' text='buy fertilizers' />
      <Button color={false} link='/explore/pesticides' text='buy pesticides' />
      <Button color={true} link='/cart' text='Check Cart' />
      <Button color={true} link='/checkout' text='Checkout' />
      <Button color={true} link='/about' text='About OnlyFarmers' />
      <Button color={true} link='/help' text='Contact Help' />
    </div>
  )
}

export default Navigation
