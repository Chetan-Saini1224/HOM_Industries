import Image from 'next/image'
import React from 'react'
// import InViewConatiner from '@/animations/InViewConatiner'
// import { popOutVariants } from '@/animations/Variants'
import { motion } from 'framer-motion';


const ProductCard = ({product,animteOut}) => {
  return (
    <motion.div  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className='w-2/5 md:w-3/12 shadow-lg'>
      <Image
        src={(product.image)? product.image  :"/assets/images/lpg1.jpg"}
        width={700}
        height={300}
        className = 'w-full'
      />
      <div className='p-3 flex flex-col h-fit justify-between'>
        <div>
          <p className='pb-1 tex-sm font-semibold' >{product.name}</p>
          <p className='text-xs capitalize break-words'>
            {product.description} 
          </p> 
        </div>
        <div>
            <p className=' font-bold mt-4 ml-1'> 
            <small className=' font-normal'>&#8377;</small> {product.price}/m 
            </p>
            <p> Minimum Qty : <span className=' font-semibold'>{product.minQty} m</span></p>
        </div>
      </div> 
    </motion.div>
  )
}

export default ProductCard