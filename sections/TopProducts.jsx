"use client"

import { ProductCard } from '@/components'
import Link from 'next/link'
import React, { useEffect,useState } from 'react'


const TopProducts = () => {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    async function getProducts(){
      const prod = await fetch('/api/products?top=3');
      const data = await prod.json();
      console.log(data);
      setProducts(data);
    }   
    getProducts()
  },[])
  return (
    <div className=' h-full'>
    <p className=' font-extrabold text-2xl orange_gradient mb-10 border-b-4 border-b-slate-600'>
      Top Products
    </p>
    <div className='flex justify-evenly flex-wrap gap-4'> 
        {products.map((val,idx) => ( 
          <ProductCard product={val} animteOut={true} key={idx} />
        ))}
    </div>
    <div className=' w-full  flex justify-center mt-8 group'>
      <Link href="/products" className=' animate-pulse orange_gradient border-[3px] border-orange-500 font-semibold p-1 w-fit text-center rounded-sm'>
          View More
         <span className=' ml-1'>&rarr;</span>
      </Link>
      </div>
    </div> 
  )
}

export default TopProducts