"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./dashboard.module.css";
import Image from "next/image";


const Dashboard = () => {
  const {data} = useSession();
  console.log(data)
  return (
        <div className={styles.main}>
            <div className=" flex gap-4">
                <Image 
                    src="/assets/NavbarIcons/dashboard.png"
                    width={80}
                    height={20}
                    className={styles.homeImage}
                />
                <p className=" pt-4 font-bold text-xl">Admin Dashboard</p> 
            </div>
            <Link href="/add_products" className={styles.link}>
                <span className=" p-1">Add Product</span>
                <Image
                   src="/assets/NavbarIcons/addProduct.png"
                   width={35}
                   height={50}                   
                />
            </Link>
            <Link href="/inventory" className={styles.link}>
                <span className=" p-1">Inventory</span>
                <Image
                   src="/assets/NavbarIcons/inventory.png"
                   width={35}
                   height={50}                   
                />
            </Link>
            <Link href="" className={styles.link}>
                <span className=" p-1">Messages </span>
                <Image
                   src="/assets/NavbarIcons/messages.png"
                   width={35}
                   height={50}                   
                />
            </Link>
            <div className={styles.signOutCard}>
                 <p className="flex bg-slate-400 p-1 shadow-md rounded-md w-fit  hover:scale-105 transition">
                    <Image 
                        src="/assets/images/user.png"
                        width={30}
                        height={30}
                        className=" mr-2 rounded-md"
                    />
                    <span className=" font-semibold text-sm p-1 text-white">
                        {data?.user.username}
                    </span>
                 </p>
                <input 
                    type="button"
                    value="Sign Out"
                    className={styles.btn_signout}
                    onClick={() => signOut()} 
                    />
            </div>
        </div>
  )
}

export default Dashboard