"use client"

import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./Navbar.module.css"
import { menuItems } from "@/constants";
import { useSession } from "next-auth/react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({shutdown,className}) =>{
const {status} = useSession();
return (
  <motion.ul variants={variants} className={`${className} ${styles.ul}`} >
    {menuItems.map( (val,idx) => 
    {
     if(status == "authenticated" && val.name == 'Log In') return;
     else if((status == "unauthenticated" && val.name == 'Dashborad')) return;
     else return <MenuItem val={val} idx={idx} key={idx} shutdown={shutdown}/>
    })}
  </motion.ul>
);
}

