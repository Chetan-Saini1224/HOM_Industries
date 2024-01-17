
import Image from 'next/image'
import styles from "./inventoryCard.module.css";
import Link from 'next/link';

const InventoryCard = ({product}) => {
  
  return (
    <div className={styles.cardContainor}>
      <div className=' w-full flex justify-between  p-1 rounded-sm'>
        <p className=' font-semibold orange_gradient'>{product.name}</p>
        <Link href={`/inventory?id=${product._id}`}>
          <Image 
            src="/assets/DashboardIcons/edit.png"
            alt="edit"
            width={25}
            height={30}
          />
        </Link>
      </div>
      
      <div className={styles.info}>
        <p className={styles.infoKey}>About Product</p>
        <p className={styles.infoValue}>{product.description}</p>
      </div>  
      <div className={styles.info}>
        <p className={styles.infoKey}>Price</p>
        <p className={styles.infoValue}>&#8377; {product.price}<span className='text-[10px]'>/meter</span></p>
      </div>
      <div className={styles.info}>
        <p className={styles.infoKey}>Minimum Quantity</p>
        <p className={styles.infoValue}> {product.minQty}<span className=' text-[10px]'> meter</span></p>
      </div>
      <div className={styles.info}>
        <p className={styles.infoKey}>Images</p>
        <div className='p-1'>
         {(product.image)? 
         <Image
          src={product.image}
          alt="product_image "
          width={100}
          height={50}
         /> :
          <p className=' text-sm'>No Images Found</p>}
          </div>
      </div>      
    </div>
  )
}

export default InventoryCard