import React from 'react'
import { FaSearch } from "react-icons/fa";

interface SubmitButtonProps {
    operation: () => void
}

const SubmitButton = ({operation}:SubmitButtonProps) => {
    return (
        <div onClick={operation} className='w-[10%] hover:cursor-pointer mx-auto my-auto flex'>
            <p className="text-center mx-auto ">
                <FaSearch />
            </p>
        </div>
    )
}

export default SubmitButton
