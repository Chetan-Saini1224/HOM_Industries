'use state'

import { motion } from "framer-motion";
import styles from "./Navbar.module.css"
import Image from "next/image";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



export const MenuItem = ({ idx,val,shutdown }) => {

  return (
    <a href={val.path} target={ (val.name == "Locate")? "__blank":""} >
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.li} 
      onClick={() => shutdown()}
    >
      <Image 
        src={val.image} 
        width={30}
        height={30}  
        />
      <span className=" p-1 font-semibold text-xl">{val.name}</span>  
    </motion.li>
    </a>
  );
};
