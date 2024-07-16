import React from 'react'
import { FaSearch } from "react-icons/fa";

const SubmitButton = () => {
    return (
        <div className='w-[10%] hover:cursor-pointer mx-auto my-auto flex'>
            <p className="text-center mx-auto ">
                <FaSearch />
            </p>
        </div>
    )
}

export default SubmitButton
