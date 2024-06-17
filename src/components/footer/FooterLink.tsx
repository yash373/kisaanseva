import React, { ReactElement } from 'react'
import Link from 'next/link'

interface FooterLinkProps {
    title: string,
    link: string,
    icon: ReactElement
}

const FooterLink = ({title, link, icon}: FooterLinkProps) => {
  return (
    <Link className='flex justify-center items-center space-x-1 hover:text-green-500 font-semibold' href={link}>
      {icon}
      <div>
        {title}
      </div>
    </Link>
  )
}

export default FooterLink
