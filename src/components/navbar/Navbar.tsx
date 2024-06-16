import React from 'react'
import NavbarButton from './NavbarButton'
import Logo from '../about/Logo'

const Navbar = () => {
    return (
        <div className='flex flex-col h-[30vh] justify-center items-center'>
            <Logo />
            <div className='flex flex-wrap w-full h-1/2 justify-evenly'>
                <NavbarButton name='Home 🏠' link='/' />
                <NavbarButton name='Government Schemes 💼' link='/governmentschemes' />
                <NavbarButton name='Sell Produce 💰' link='/sellproduce' />
                <NavbarButton name='Connect To Market 🤝' link='/connecttomarket' />
                <NavbarButton name='Kart 🛒' link='/' />
                <NavbarButton name='Buy Tools ⛏' link='/explore/tools' />
                <NavbarButton name='Buy Seeds 🌱' link='/explore/seeds' />
                <NavbarButton name='Buy Fertilizers 💉' link='/explore/fertilizers' />
                <NavbarButton name='Buy Pesticides 🧪' link='/explore/pesticides' />
            </div>
        </div>
    )
}

export default Navbar
