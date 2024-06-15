import React from 'react'
import SidebarIcon from './SidebarIcon'
import { FaShoppingCart } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import { GiFarmTractor } from "react-icons/gi";

const Sidebar = () => {
    return (
        <div className='justify-center fixed top-0 left-0 h-screen w-[5vw] m-0
                    flex flex-col 
                    bg-gray-900 text-white shadow-lg'>
            <SidebarIcon icon={<FaShoppingCart />} text="Check Kart" link="/kart" />
            <SidebarIcon icon={<GiFarmTractor />} text="Buy Tools" link="/explore/tools" />
            <SidebarIcon icon={<FaSeedling />} text="Buy Seeds" link="/explore/seeds" />
        </div>
    )
}

export default Sidebar