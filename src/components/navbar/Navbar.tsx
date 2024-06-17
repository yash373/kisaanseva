import React from 'react'
import NavbarButton from './NavbarButton'
import Logo from '../about/Logo'
import ChangeLanguageButton from '../about/ChangeLanguageButton'

const Navbar = () => {
    return (
        <div className='flex flex-col h-full justify-center items-center'>
            <div className='flex md:flex-row flex-col-reverse w-full border-b-4 border-black'>
                <Logo />
                <ChangeLanguageButton />
            </div>
            <div className='flex flex-wrap border-b-4 border-black w-full h-1/2 justify-evenly'>
                <NavbarButton name='Home 🏠' link='/' />
                <NavbarButton name='Government Schemes 💼' link='/governmentschemes' />
                <NavbarButton name='Sell Produce 💰' link='/sellproduce' />
                <NavbarButton name='Connect To Market 🤝' link='/connecttomarket' />
                <NavbarButton name='Connect To Transport 🚚' link='/connecttotransport' />
                <NavbarButton name='Insurance Schemes 🛡' link='/insurancecompanies' />
                <NavbarButton name='Know Your MSP 🌾' link='/msp' />
                <NavbarButton name='Get Help 🔴' link='/helpline' />
                <NavbarButton name='File Your Complaint 📃' link='/complains' />
                <NavbarButton name='Buy Tools ⛏' link='/explore/tools' />
                <NavbarButton name='Buy Seeds 🌱' link='/explore/seeds' />
                <NavbarButton name='Buy Fertilizers 💉' link='/explore/fertilizers' />
                <NavbarButton name='Buy Pesticides 🧪' link='/explore/pesticides' />
                <NavbarButton name='Kart 🛒' link='/kart' />
            </div>
        </div>
    )
}

export default Navbar
