import React from 'react'

export interface HeadingProps {
    text: string
}

const Heading = ({text}: HeadingProps) => {
  return (
    <p className='text-3xl text-center py-5 font-extrabold'>
      {text}
    </p>
  )
}

export default Heading
