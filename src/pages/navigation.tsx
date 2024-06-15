import React from 'react'
import Button from '@/components/navigation/Button'

const Navigation = () => {
  return (
    <div className='flex justify-center items-center w-full h-[100vh]'>
      <div className='flex flex-col w-full mt-5 h-full rounded-md divide-y bg-slate-800 md:w-[95%]'>
        <Button color={false} link='/explore/tools' text='buy tools' />
        <Button color={false} link='/explore/seeds' text='buy seeds' />
        <Button color={false} link='/explore/fertilizers' text='buy fertilizers' />
        <Button color={false} link='/explore/pesticides' text='buy pesticides' />
        <Button color={true} link='/kart' text='Check Kart' />
        <Button color={true} link='/checkout' text='Checkout' />
        <Button color={true} link='/about' text='About OnlyFarmers' />
        <Button color={true} link='/help' text='Contact Help' />
      </div>
    </div>
  )
}

export default Navigation
