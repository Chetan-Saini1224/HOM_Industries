

import { Suspense } from "react";
import TopProducts from "./TopProducts";
import ProductCardLoading from "@/components/ProductLoading";
import Image from 'next/image'
import Link from 'next/link'




const SuspenseTopProduct = () =>{
  return(
    <div className=' h-full'>
    <p className=' font-extrabold text-2xl orange_gradient mb-10 border-b-4 border-b-slate-600'>
      Top Products
    </p>
    <div className='flex justify-between flex-wrap gap-6'> 
       <Suspense fallback={<Loading />}>
            <TopProducts />  
        </Suspense>
      <div className='group flex flex-1  justify-center items-center'>
      <Link 
        href="/products" 
        className=' animate-pulse orange_gradient border-[3px] p-1 border-orange-500 font-semibold text-xl w-fit text-center h-fit rounded-lg hover:animate-none'>
          View More
         <Image
             src="/assets/images/arrow.png"
             alt="view_more"
             width={50}
             height={50}
             className=' inline-block mx-1'
          />
      </Link>
      </div>
    </div>
    </div>   
  );
}

const Loading = () => {
  return (
    <>
       <ProductCardLoading />
       <ProductCardLoading />
       <ProductCardLoading /> 
    </>
  )
}

export default SuspenseTopProduct;