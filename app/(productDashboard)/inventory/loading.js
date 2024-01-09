import styles from "./inventory.module.css";

//it will create the suspense bounder around the children
export default function Loading() {
  
  return <>
    <div className={styles.inventory_container}>
      <InventoryLoadingCard />
      <InventoryLoadingCard />
    </div>      
  </>
}

const InventoryLoadingCard = () =>{
  return <>
    <div className={styles.cardContainor}>
      <div className=' w-full flex justify-between  p-1 rounded-sm'>
        <span className=" orange_gradient font-semibold" >Fetching Product.... </span>
        <span className={styles.infoValue}>edit</span>
      </div>
      
      <div className={styles.info}>
        <p className={styles.infoKey}>About Product</p>
        <p className={styles.infoValue}>About Product</p>
      </div>  
      <div className={styles.info}>
        <p className={styles.infoKey}>Price</p>
        <p className={styles.infoValue}>Price</p>
      </div>
      <div className={styles.info}>
        <p className={styles.infoKey}>Minimum Quantity</p>
        <p className={styles.infoValue}>Minimum Quantity</p>
      </div>
      <div className={styles.info}>
        <p className={styles.infoKey}>Images</p> 
        <p className={styles.infoValue}>Images</p> 
      </div>      
    </div>
  </>
}


