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
            <div className='flex md:flex-row flex-col space-y-3 md:space-y-0 mx-auto md:space-x-5'>
                <p className='font-extrabold text-xl mx-auto my-auto'>{title}</p>
                <button onClick={()=>{operation()}} className='flex text-center md:p-2 p-4 bg-green-400 mx-auto w-[80%] md:w-auto hover:bg-green-700 rounded-md font-semibold'>
                    <p className='mx-auto'> Click Here (government authorized center) ⏫</p>
                </button>
            </div>
        </div>
    )
}

export default Page
