import React from 'react'

interface PageProps {
    img: string,
    title: string,
    operation: () => void
}

const Page = ({ img, title, operation }: PageProps) => {
    return (
        <div className='flex w-full space-y-5 flex-col'>
            <img className='h-[50vh] w-[70vw] rounded-md mx-auto' src={img} />
            <div className='flex md:flex-row flex-col mx-auto space-x-5'>
                <p className='font-extrabold text-xl my-auto'>{title}</p>
                <button onClick={()=>{operation()}} className='flex w-32 text-center md:p-2 p-4 bg-green-400 hover:bg-green-700 rounded-md font-semibold'>
                    <p className='mx-auto'> Click Here ⏫</p>
                </button>
            </div>
        </div>
    )
}

export default Page
