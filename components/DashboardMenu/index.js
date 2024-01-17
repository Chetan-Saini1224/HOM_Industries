"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./dashboard.module.css";
import Image from "next/image";
import { useState } from "react";


const Dashboard = () => {
  const {data} = useSession();
  const [sidebar,setSidebar] = useState(false);
  return (
        <div className={`${(sidebar)? " ml-0 ":' -ml-72'} ${styles.main}`}>
             <div className=" lg:hidden absolute -right-24">
                <button 
                    className=" font-bold bg-orange-400 p-1 text-white rounded-sm outline-none"
                    onClick={() => setSidebar(prev => !prev)} >
                    {(sidebar)? "< Close List" : "Open List >"} 
                </button> 
             </div>
            <div className=" flex gap-4">
                <Image 
                    src="/assets/NavbarIcons/dashboard.png"
                    alt="dashboard"
                    width={80}
                    height={20}
                    className={styles.homeImage}
                />
                <p className=" pt-8 font-bold text-xl ">Admin Dashboard</p> 
            </div>
            <Link href="/add_products" className={styles.link} onClick={() => setSidebar(false)}>
                <span className=" p-1">Add Product</span>
                <Image
                   src="/assets/NavbarIcons/addProduct.png"
                   alt="add_products"
                   width={35}
                   height={50}                   
                />
            </Link>
            <Link href="/inventory" className={styles.link} onClick={() => setSidebar(false)}>
                <span className=" p-1">Inventory</span>
                <Image
                   src="/assets/NavbarIcons/inventory.png"
                   alt="inventory"
                   width={35}
                   height={50}                   
                />
            </Link>
            <Link href="/messages" className={styles.link} onClick={() => setSidebar(false)}>
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
                        alt="user"
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