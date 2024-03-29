import styles from "./inventory.module.css";
import InventoryCard from "@/components/InventoryCard";
const UpdateModal = lazy(() => import("@/components/UpdateModal/index"))
import { connectToDB } from "@/utils/database";
import Product from "@/models/product";
import { lazy } from "react";


async function getData() {
   try{  
    //await new Promise(resolve => setTimeout(resolve,3000)); 
    await connectToDB();
    const products = await Product.find({});
    return products;
   }
   catch(err){
      return err;  
   }   
}
 
export default async function Page({searchParams}) 
{  
   const data = await getData();
   const id = searchParams?.id;
   return ( <>
      <div className={styles.inventory_container}>
      {data.map((val,idx) => <InventoryCard product={val} key={idx} />)}  
      </div>
      {id && <UpdateModal id={id} />}
   </>)
}