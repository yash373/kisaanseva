import React from 'react'
import SidebarIcon from './SidebarIcon'
import { FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className='justify-center fixed top-0 left-0 h-screen w-[5vw] m-0
                    flex flex-col 
                    bg-gray-900 text-white shadow-lg'>
            <SidebarIcon icon={<FaShoppingCart />} text="Check Kart" link="/kart" />
        </div>
    )
}

export default Sidebar