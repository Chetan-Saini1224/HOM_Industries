"use client"

import React,{Children, useEffect} from 'react'
import { motion } from 'framer-motion';
import { useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const InViewConatiner = ({children,variants,className}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("Animate");
    }
  }, [controls, inView]);

  return (
    <motion.div       
      ref={ref}
      initial= "Initial"
      animate={controls}
      variants={variants}
      className={className}
    >
       {children}  
    </motion.div>
  )
}

export default InViewConatiner;