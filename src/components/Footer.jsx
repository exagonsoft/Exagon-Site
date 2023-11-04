import React from 'react'
import { Link } from 'react-router-dom'
import { socialMedia } from '../settings/generalSettings'

const Footer = () => {
  return (
   <div className="flex w-full justify-center items-center mt-10 pb-10 gap-10">
    {socialMedia.map((socialLink, index) => (
      <Link key={index} to={socialLink.link} className={`text-[32px] hover:text-gray-300 ${socialLink.style} `}>{socialLink.icon}</Link>
    ))}
   </div>
  )
}

export default Footer
