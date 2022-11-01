import React from 'react'

const NavLinkHeader = ({text, href }) => {
  return (
    <>
     <a href={href} className='relative py-8 group'>
      <span className='cursor-pointer'>{text}</span>
      <span className='mt-5 absolute bottom-0 block w-full h-1 group-hover:bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all duration-400'></span>
      </a>
    </>
  )
}

export default NavLinkHeader