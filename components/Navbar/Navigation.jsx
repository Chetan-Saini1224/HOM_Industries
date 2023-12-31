"use client"

import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./Navbar.module.css"
import { menuItems } from "@/constants";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({shutdown,className}) =>{
const { status } = useSession();
const signInBtn =  {path:"/signIn",name:'Log In',image:'/assets/NavbarIcons/login.png'};
const dashBtn =   {path:"/add_products",name:'Dashboard',image:'/assets/NavbarIcons/dashboard_icon.png'};

return (
  <motion.ul variants={variants} className={`${className} ${styles.ul}`} >
    {menuItems.map( (val,idx) => 
    {
     return <MenuItem val={val} idx={idx} key={idx} shutdown={shutdown}/>
    })}
    {(status == "authenticated")? 
        <MenuItem val={dashBtn} shutdown={shutdown}/> :
        <MenuItem val={signInBtn}  shutdown={shutdown}/>
    }
  </motion.ul>
);
}

