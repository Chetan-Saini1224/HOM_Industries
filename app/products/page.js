"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "@/components";


const Products = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    async function getProducts(){
      const prod = await fetch('/api/products');
      const data = await prod.json();
      setProducts(data);
    }   
    getProducts()
  },[])
  return (
    <div id="Products" className="padding-x padding-y flex gap-4 flex-wrap justify-evenly h-fit">
        {products.map((val,idx) => (
          <ProductCard product={val} key={idx} />
        ))}
    </div>
  )
}

export default Products