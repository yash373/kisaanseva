import React from 'react'
import { useState } from 'react'
import { BsWhatsapp, BsGlobe } from "react-icons/bs"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface PopupProps {
    handleClose : () => void
}

const Popup = ({ handleClose }: PopupProps) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMSG] = useState("")
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'tel') {
            setPhone(value);
        } else if (name === 'msg') {
            setMSG(value);
        }
    }

    const handleSubmit = () => {
        handleClose()
    }

    return (
        <div className="fixed h-full my-auto w-[100vw] flex justify-center items-center">
            <div className="rounded-xl shadow-2xl p-5 bg-white border-2 max-w-6xl mx-auto my-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div className="flex flex-col">
                        <h1 className='capitalize text-center font-extrabold text-3xl'>
                            Get Direct Help From KisaanSeva
                        </h1>
                        <audio className='hidden' id="myAudio" src="https://studymbbsabroad.co.in/Sounds/tingsound.wav" controls />
                        <form action='javascript:void(0)' className=" flex flex-col justify-center text-sm">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">Full Name</label>
                                <input value={name} onChange={handleChange} type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">Number</label>
                                <input value={phone} onChange={handleChange} type="number" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="msg" className="hidden">City</label>
                                <input value={msg} onChange={handleChange} type="text" name="msg" id="msg" placeholder="Enter Your Message" className="w-100 mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div className='flex flex-col md:flex-row gap-2 md:gap-0 w-full'>
                                <button onClick={handleSubmit} type="submit" className="md:w-32 mx-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                                    Submit
                                </button>

                                <button onClick={() => { handleClose() }} type="submit" className="mx-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                                    Close Form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup