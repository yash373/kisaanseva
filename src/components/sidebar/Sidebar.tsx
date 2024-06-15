import React from 'react'
import SidebarIcon from './SidebarIcon'
import {FiPhoneCall} from "react-icons/fi"
import {BsWhatsapp,BsInstagram} from "react-icons/bs"
import {FaYoutube,FaFacebookF} from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className='justify-center fixed top-0 left-0 h-screen w-[5vw] m-0
                    flex flex-col 
                    bg-gray-900 text-white shadow-lg'>
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
        </div>
    )
}

export default Sidebar