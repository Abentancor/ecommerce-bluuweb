import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgMiniProduct1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgMiniProduct2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgMiniProduct3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgMiniProduct4 from '@/assets/images/image-product-4-thumbnail.jpg'

import NextButton from '@/Components/Icons/NextButton'
import PrevButton from '@/Components/Icons/PrevButton'

const SlideProduct = () => {
  return (
    <>
        <section className='grid md:grid-cols-4 md:gap-8'>
           <div className='col-span-4 aspect-[16/12]'>
            <img src={imgProduct1} alt=""/>
            <div>
                <button>
                    <PrevButton/>
                </button>
                <button>
                    <NextButton/>
                </button>
            </div>
           </div>
           <img src={imgMiniProduct1} alt=""    className='hidden md:block'/>
           <img src={imgMiniProduct2} alt=""    className='hidden md:block' />
           <img src={imgMiniProduct3} alt=""    className='hidden md:block' />
           <img src={imgMiniProduct4} alt=""    className='hidden md:block' />
        </section>
    </>
  )
}

export default SlideProduct