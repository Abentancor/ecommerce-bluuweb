import React from 'react'
import DetailsProducts from '@/Components/Products/DetailsProducts'
import SlideProduct from '@/Components/Products/SlideProduct'

const MainProducts = () => {
  return (
    <>
    <main className='grid md:grid-cols-2 gap-8 md:p-8'>
        <SlideProduct/>
        <DetailsProducts/>
    </main>
    </>
  )
}

export default MainProducts