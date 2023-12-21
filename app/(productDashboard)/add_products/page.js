'use client'

import { useRef, useState } from "react";


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
        <div className="flex flex-col w-full items-center gap-2 mt-4">
            <p className=" font-semibold text-xl">Add Product</p>
            <form className="flex flex-col gap-4 w-3/4" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Product Name" 
                className="p-1 outline-none border-2 border-orange-500 rounded-lg" 
                value={data.name}
                onInput={(e) => setData((prev) => ({
                  ...prev,
                  name:e.target.value
                }))} 
              required />

              <textarea 
                rows={5} cols={10}
                placeholder="Project Description" 
                className="p-1 outline-none border-2 border-orange-500 rounded-lg"
                value={data.description}
                onInput={(e) => setData((prev) => ({
                  ...prev,
                  description :e.target.value
                }))}
              required />
              
              <input 
                type="text"
                placeholder="Minimum Quantity"
                className="p-1 outline-none border-2 border-orange-500 rounded-lg" 
                value={data.minQty}
                onInput={(e) => setData((prev) => ({
                    ...prev,
                    minQty: e.target.value
                }))}
                required />


              <input type="text" placeholder="Price per meter" className="p-1 outline-none border-2 border-orange-500 rounded-lg" 
                  value={data.price}
                  onInput={(e) => setData((prev) => ({
                      ...prev,
                      price:e.target.value
                  }))} required />

              <div>
                <label className=" inline-block font-semibold mb-2 mr-2">Product Image :</label>
                <input type="file" placeholder="Product Image" accept="image/png, image/jpeg" ref={uploadFile} required/>
              </div>

              <input type="submit" value="Add Product" className="p-1 outline-none border-2 border-orange-500 rounded-lg w-fit bg-orange-400 text-white hover:bg-orange-600"  />  
            </form>
        </div>)
}

export default AddProduct;