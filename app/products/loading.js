import ProductCardLoading from "@/components/ProductLoading"
import styles from "./products.module.css";

export default function Loading() {
    return <>
    <div className={styles.Container}>
        <ProductCardLoading />
        <ProductCardLoading />
        <ProductCardLoading />
        <ProductCardLoading />     
    </div>    
    </>
}