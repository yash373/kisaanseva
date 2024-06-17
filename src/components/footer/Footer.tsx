import React from 'react'
import FooterLink from './FooterLink'
import { FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex justify-center space-x-5 md:flex-wrap flex-col md:flex-row border-t-4 h-[10vh] border-black'>
            <FooterLink plain={false} title='+91-11233889919' icon={<p className='font-bold'>Nation Agriculture Helpline Number: </p>} link='tel:9111233889919' />
            <FooterLink link='' plain={true} title='Yashodhan Mandal' icon={<FaRegCopyright />}  />
            <FooterLink link='' plain={true} title='NHCE, Bengaluru' icon={<FaMapMarkerAlt />}  />
            <FooterLink plain={false} title='Repository' icon={<FaGithub />} link='https://github.com/yash373/onlyfarmers' />
        </div>
    )
}

export default Footer
