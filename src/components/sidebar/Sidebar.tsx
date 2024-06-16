import React from 'react'
import SidebarIcon from './SidebarIcon'
import { FaShoppingCart } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa6";
import { FaSprayCan } from "react-icons/fa6";
import { MdPestControlRodent } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiGovernmentFill } from "react-icons/ri";
import { GiTrade } from "react-icons/gi";
import { VscDebugDisconnect } from "react-icons/vsc";
import { FaTruck } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className='justify-center top-0 left-0 h-screen w-[6vw] m-0
                    flex flex-col sticky
                    shadow-lg'>
            <SidebarIcon icon={<IoMdHome />} text="Home" link="/" />
            <SidebarIcon icon={<RiGovernmentFill />} text="Government Schemes" link="/governmentschemes" />
            <SidebarIcon icon={<GiTrade />} text="Sell Your Produce" link="/sellproduce" />
            <SidebarIcon icon={<VscDebugDisconnect />} text="Connect To Market" link="/connecttomarket" />
            <SidebarIcon icon={<FaTruck />} text="Connect to Transport" link="/connecttotransport" />
            <SidebarIcon icon={<FaShield />} text="Get Insurance Schemes" link="/insurancecompanies" />
            <SidebarIcon icon={<GiMoneyStack />} text="Know Your MSP" link="/msp" />
            <SidebarIcon icon={<IoMdHelp />} text="Get Help" link="/helpline" />
            <SidebarIcon icon={<FaShoppingCart />} text="Check Kart" link="/kart" />
            <SidebarIcon icon={<FaTractor />} text="Buy Tools" link="/explore/tools" />
            <SidebarIcon icon={<FaSeedling />} text="Buy Seeds" link="/explore/seeds" />
            <SidebarIcon icon={<FaSprayCan />} text="Buy Fertilizers" link="/explore/fertilizers" />
            <SidebarIcon icon={<MdPestControlRodent />} text="Buy Pesticides" link="/explore/pesticides" />
        </div>
    )
}

export default Sidebar