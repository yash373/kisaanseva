import React from 'react'

interface HeadingProps {
    text: string
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <div className='mx-auto font-bold text-xl text-center'>
            {text}
        </div>
    )
}

export default Heading
