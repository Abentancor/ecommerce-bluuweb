import logoSneakers from '@/assets/images/logo.svg'
import avatarImage from '@/assets/images/image-avatar.png'
import BurgerIcon from '@/Components/Icons/BurgerIcon'
import CartIcon from '@/Components/Icons/CartIcon'
import CloseIcon from '@/Components/Icons/CloseIcon'
import { useState } from 'react'
import NavLinkHeader from './NavLinkHeader'

function Header() {
    
    const [navClass, setNavClass] = useState('mr-auto hidden font-bold md:static md:p-0 md: md:gap-y-8  md:mr-auto md:flex md:flex-row gap-4 bg-white');

    const handleOpenMenu = () =>{
        setNavClass('absolute  mr-auto top-0 left-0 h-full flex flex-col p-8 w-2/3 bg-slate-600 font-bold gap-4 bg-white')
    }
    const handleCloseMenu = () =>{
        setNavClass('hidden font-bold md:static md:p-0 md: md:gap-y-8  md:mr-auto md:flex md:flex-row gap-4 bg-white')
    }
  return (
    <>
     <header className='flex gap-6 container mx-auto px-4 items-center bg-white p-4 md:p-0'>
        <button className='md:hidden' onClick={handleOpenMenu}>
            <BurgerIcon/>
        </button>
        <img src={logoSneakers} alt="logo sneakers" className='mr-auto md:mr-0 mb-1' />
        <nav className={navClass}>
            <button className='mb-6 md:hidden' onClick={handleCloseMenu}><CloseIcon/></button>
            <NavLinkHeader text='Collection'/>
            <NavLinkHeader text='Men'/>
            <NavLinkHeader text='Women'/>
            <NavLinkHeader text='About'/>
            <NavLinkHeader text='Contact'/>
        </nav>
        <div className='flex gap-6'>
            <button>
                <CartIcon/>
            </button>
            <img src={avatarImage} alt="ImgAvatar" className='w-10' />
        </div>
    </header>
    <span className='container mx-auto hidden h-[1px] md:block w-full bg-gray-500'></span>
    </>
  )
}

export default Header