'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styles from "./Navbar.module.css"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  
  function sidebarToogle(){
    toggleOpen();
  }

  return (
  <>  
    <nav 
      className='relative hidden  md:flex justify-between w-full p-4 ' >
      <div>
          <Image 
            src="/assets/images/lpg1.jpg"
            alt="logo"
            width={50}
            height={50}
            className=''
          />
      </div>
      <div className=' w-2/5 flex justify-between p-1 font-semibold'>
            <Link href="/products" className=' hover:border-b-4 hover:border-orange-500 cursor-pointer'>
                Products
            </Link> 
            <Link href="/products" className=' hover:border-b-4 hover:border-orange-500 cursor-pointer'>
                Contact Us
            </Link> 
            <Link href="/products" className=' hover:border-b-4 hover:border-orange-500 cursor-pointer'>
                About Us
            </Link>   
      </div>
        
      <div className='p-1 font-semibold'>
          <Link href="/login" className=' bg-orange-400 p-2 rounded-md hover:bg-slate-300 hover:text-orange-500'>
            Login
          </Link>
      </div>
      
    </nav>

  <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className=' relative md:hidden flex justify-between w-full p-2'
  >
    <motion.div variants={sidebar}  />
    <Navigation />
    <MenuToggle toggle={() => sidebarToogle()} />
    <div>
        <Image 
          src="/assets/images/lpg1.jpg"
          alt="logo"
          width={50}
          height={50}
        />
    </div>
  </motion.nav>        
 </>  )
}

export default Navbar