'use client'

import { useRef, useState } from "react";
import Styles from "./addProducts.module.css";

const AddProduct = () => {
  
   const [data,setData] = useState({
    name:"",description:"",price:"",image:"",minQty:""
   });
   
   const uploadFile = useRef(null);

  function handleSubmit(e)
  {
    e.preventDefault();
    const file = uploadFile.current.files[0];
    const formData = new FormData();
    for(const [key,value] of Object.entries(data))
    {
      if(key === "image") formData.append('image', file);
      else formData.append(key,value);          
    }  
    
    fetch("/api/products",{
        method: "POST",
        body: formData
    }).then(async (response)=>{
        const data = await response.json();  
        alert(data.message);
        setData({name:"",description:"",price:"",image:"",minQty:""})
        uploadFile.current.value = null;
    }).catch((err) => {
       console.error(err);   
    })
  }

  return (
        <div className="flex flex-col w-full  gap-2 mt-4 pb-3">
            <p className=" font-semibold text-xl bg-slate-400 p-1 rounded-sm pl-3 text-white">ADD PRODUCTS</p>
            <form className="flex flex-col gap-4 w-full md:w-4/5 " onSubmit={handleSubmit}>
            <div className={Styles.inputContainer}>
              <label className="p-2 font-semibold">Product Name</label>
              <input 
                type="text" 
                placeholder="ex: Stell Wire Hose" 
                className={Styles.inputs}
                value={data.name}
                onInput={(e) => setData((prev) => ({
                  ...prev,
                  name:e.target.value
                }))} 
              required />
            </div>
            <div className={Styles.inputContainer}>
              <label className="p-2 font-semibold">Product Description</label>  
              <textarea 
                rows={5} cols={20}
                placeholder="Description ...." 
                className={Styles.inputs}
                value={data.description}
                onInput={(e) => setData((prev) => ({
                  ...prev,
                  description :e.target.value
                }))}
              required />
            </div>
            <div className={Styles.inputContainer}>
              <label className="p-2 font-semibold">Minimum Qty</label>  
              <input 
                type="number"
                placeholder="ex: 1000"
                className={Styles.inputs}
                value={data.minQty}
                onInput={(e) => setData((prev) => ({
                    ...prev,
                    minQty: e.target.value
                }))}
                required />
            </div>  
            <div className={Styles.inputContainer}>
              <label className="p-2 font-semibold">Price <span className=" text-xs">(/meter)</span> </label>  
              <input type="number" placeholder="ex: 29" className={Styles.inputs}
                  value={data.price}
                  onInput={(e) => setData((prev) => ({
                      ...prev,
                      price:e.target.value
                  }))} required />
            </div>    
            <div className={Styles.inputContainer}>
              <label className=" inline-block font-semibold mb-2 mr-2 p-2">Product Image </label>
              <input type="file" placeholder="Product Image" accept="image/png, image/jpeg" ref={uploadFile} required/>
            </div>

              <input type="submit" value="Add Product" className="p-1 outline-none border-2 border-orange-500 rounded-lg w-fit bg-orange-400 text-white hover:bg-orange-600"  />  
            </form>
        </div>)
}

export default AddProduct;