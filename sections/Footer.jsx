 import React from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 import { Address,productCategory } from '@/constants'

const Footer = () => {
  return (
    <div className=' flex bg-orange-300 p-2 rounded-md'>
       <div className='flex-1 flex flex-col md:flex-row justify-around'>
          <Image 
            src="/assets/images/HOM_LOGO.png"
            alt="logo"
            width={180}
            height={100}
            className=' rounded-2xl'
          />
          <div className=' text-sm font-medium p-4'>
            <p>{Address.name}</p>
            <p>{Address.localAddress}</p>
            <p>{Address.pincode}</p>
            <p>{Address.city}</p>
          </div>
       </div>
       <div className='flex-1 flex flex-col md:flex-row justify-around'>

          <div className=' flex flex-col p-4'>
            <p className=' font-semibold text-xs mb-1'>Explore</p>
            <Link href="/#Home" className='py-[0.1rem] text-orange-600 hover:text-orange-700 font-medium text-xs'>
              Home
            </Link> 
            <Link href="/products" className='py-[0.1rem] text-orange-600 hover:text-orange-700 font-medium text-xs'>
              Products
            </Link> 
            <Link href="/#TopProducts" className='py-[0.1rem] text-orange-600 hover:text-orange-700 font-medium text-xs'>
              Top Products
            </Link> 
            <Link href="/#AboutUs" className='py-[0.1rem] text-orange-600 hover:text-orange-700 font-medium text-xs'>
              About Us
            </Link> 
          </div>      

          <div className=' flex flex-col p-4'>
            <p className=' font-semibold text-xs mb-1'>Products Category</p>
              {productCategory.map((val,idx) => (
                  <Link 
                      key={`category${idx}`} 
                      href=""
                      className='py-[0.1rem] text-orange-600 hover:text-orange-700 font-medium text-xs'>
                    {val}
                  </Link>
              ))}  
          </div>  
          
       </div>

    </div>
  )
}

export default Footer