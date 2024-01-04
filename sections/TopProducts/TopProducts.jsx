
import React from 'react'
import { ProductCard } from '@/components';


const TopProducts = async () => {
  const products = await getProducts();
  
  if(typeof products  === "string") return <p className=' text-red-500 font-semibold'>{products}</p>
  
  return (
    <>
    {products?.map((val,idx) => ( 
        <ProductCard product={val} animteOut={true} key={idx} />
    ))}
    </> 
  )
}

 async function getProducts() {
  try{
  let url = `${process.env.NEXTAUTH_URL}/api/products?top=3`;
  // await new Promise(resolve => setTimeout(resolve,9000) )
  let res  = await fetch(url,{cache: "no-store"})
  let data = await res.json();
  return data
  }
  catch(err) {
     console.error(err);
     return "Failed To Fetch Products ....."  
  }
   
}


export default TopProducts;