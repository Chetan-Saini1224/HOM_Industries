'use state'

import { motion } from "framer-motion";
import styles from "./Navbar.module.css"
import Link from "next/link";
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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ idx,val }) => {
  const style = { border: `2px solid ${colors[idx]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.li} 
    >
      <Image 
        src={val.image} 
        width={30}
        height={30}  
        />
      <Link href={val.path}>
        {val.name}
      </Link>
    </motion.li>
  );
};
