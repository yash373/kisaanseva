import React from 'react'
import FooterLink from './FooterLink'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex md:flex-wrap flex-col md:flex-row border-t-4 h-[10vh] border-black'>
      <FooterLink title='Repository' icon={<FaGithub />} link='https://github.com/yash373/onlyfarmers' />
    </div>
  )
}

export default Footer
