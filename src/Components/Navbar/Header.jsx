import logoSneakers from '@/assets/images/logo.svg'
import avatarImage from '@/assets/images/image-avatar.png'
import BurgerIcon from '@/Components/Icons/BurgerIcon'
import CartIcon from '@/Components/Icons/CartIcon'
import CloseIcon from '@/Components/Icons/CloseIcon'
import { useState } from 'react'

function Header() {
    
    const [navClass, setNavClass] = useState('mr-auto hidden font-bold md:static md:p-0 md: md:gap-y-8  md:mr-auto md:flex md:flex-row gap-4 bg-white');

    const handleOpenMenu = () =>{
        console.log('first')
        setNavClass('absolute  mr-auto top-0 left-0 h-full flex flex-col p-8 w-2/3 bg-slate-600 font-bold gap-4 bg-white')
    }
    const handleCloseMenu = () =>{
        setNavClass('hidden font-bold md:static md:p-0 md: md:gap-y-8  md:mr-auto md:flex md:flex-row gap-4 bg-white')
    }
  return (
    <>
     <header className='flex gap-6 container mx-auto px-4 items-center py-8 bg-white'>
        <button className='md:hidden' onClick={handleOpenMenu}>
            <BurgerIcon/>
        </button>
        <img src={logoSneakers} alt="logo sneakers" className='mr-auto md:mr-0 mb-1' />
        <nav className={navClass}>
            <button className='mb-6 md:hidden' onClick={handleCloseMenu}><CloseIcon/></button>
            <a href="#">collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div className='flex gap-6'>
            <button>
                <CartIcon/>
            </button>
            <img src={avatarImage} alt="ImgAvatar" className='w-10' />
        </div>
    </header>
    </>
  )
}

export default Header