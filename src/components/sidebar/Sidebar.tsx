import React from 'react'
import SidebarIcon from './SidebarIcon'
import {FiPhoneCall} from "react-icons/fi"
import {BsWhatsapp,BsInstagram} from "react-icons/bs"
import {FaYoutube,FaFacebookF} from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className='fixed top-1/3 right-0 rounded-tl-lg rounded-bl-lg w-16 flex flex-col bg-white shadow-lg'>
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
            <SidebarIcon icon={<FiPhoneCall/>} text="Contact Us Through Phone" link="tel:9739500393" color="bg-blue-500" />
        </div>
    )
}

export default Sidebar