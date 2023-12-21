import Image from "next/image";
import styles from "./inventory.module.css";
import InventoryCard from "@/components/InventoryCard";
import UpdateModal from "@/components/UpdateModal";

async function getData() {
  try {
  const res = await fetch('http://localhost:3000/api/products',{
    cache:"no-store"
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
   return res.json()
  }
  catch(err){
    return err;
  }
}
 
export default async function Page({searchParams}) {
  const data = await getData();
  const id = searchParams?.id;
  return ( <>
      <div className={styles.inventory_container}>
      {data.map((val) => <InventoryCard product={val} />)}  
      </div>
      {id && <UpdateModal id={id} />}
  </>)
}
