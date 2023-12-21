"use client"

import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./Navbar.module.css"
import { menuItems } from "@/constants";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({shutdown}) =>{

return (
  <motion.ul variants={variants} className={styles.ul} >
    {menuItems.map( (val,idx) => (
      <MenuItem val={val} idx={idx} key={idx} shutdown={shutdown}/>
    ))}
  </motion.ul>
);
}

