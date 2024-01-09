import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { ProductCard } from "@/components";
import styles from "./products.module.css";

async function getData() {
   try{  
    // await  new Promise(resolve => setTimeout(resolve,3000));
    await connectToDB();
    const products = await Product.find({});
    return products;
   }
   catch(err){
      return err;  
   }   
}


const Products =async () => {
  const products = await getData();
  return (
    <div id="Products" className={styles.Container}>
        {products.map((val,idx) => { 
          val._doc._id = val._doc._id.toString();
          return (
              <ProductCard product={val._doc} key={idx} />
          )
        })}
    </div>
  )
}

export default Products