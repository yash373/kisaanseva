import React from 'react'
import FooterLink from './FooterLink'
import { FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { GiSuicide } from "react-icons/gi";

const Footer = () => {
    return (
        <div className='flex justify-start space-x-7 md:flex-wrap flex-col md:flex-row border-t-4 h-full border-black'>
            <FooterLink plain={true} title='+91-11233889919' icon={<GiSuicide />} link='tel:9111233889919' />
            <FooterLink link='' plain={true} title='Yashodhan Mandal' icon={<FaRegCopyright />}  />
            <FooterLink link='' plain={true} title='NHCE, Bengaluru' icon={<FaMapMarkerAlt />}  />
            <FooterLink plain={false} title='Repository' icon={<FaGithub />} link='https://github.com/yash373/kisaansevaa' />
        </div>
    )
}

export default Footer
