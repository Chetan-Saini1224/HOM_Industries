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
      className=' sticky z-50 bg-slate-100 hidden  md:flex justify-between w-full p-2' >
      <div>
        <Link href="/">
          <Image 
            src="/assets/images/HOM_LOGO.png"
            alt="logo"
            width={65}
            height={50}
            className=' rounded-2xl'
          />
        </Link>  
      </div>
      <div className=' w-2/5 flex justify-between pt-5 font-semibold '>
            <Link href="/products" className={`orange_gradient hover:text-orange-700 `} >
                Products
            </Link> 
            <Link href="/#TopProducts" className={`orange_gradient hover:text-orange-700 `}>
                Top Products
            </Link> 
            <Link href="/#AboutUs" className={`orange_gradient hover:text-orange-700 `}>
                About Us
            </Link>   
      </div>
        
      <div className='pt-5 font-semibold '>
          <a 
            href="https://www.google.com/maps/@30.3944472,76.8092398,3a,75y,92.3h,82.74t/data=!3m6!1e1!3m4!1sRzU-rW3CMIMg4w_nN8O5bQ!2e0!7i13312!8i6656?entry=ttu" 
            target='_blank' 
            className=' bg-orange-400 p-2 rounded-md border-[3px] text-white hover:border-orange-500  hover:orange_gradient'>
            <Image
               src="/assets/NavbarIcons/mapLogo.png"
               alt="map_logo"
               width={30}
               height={20}
               className=' inline mr-1'
            />
            Locate
          </a>
      </div>
      
    </nav>

  <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className=' sticky z-50 bg-slate-100  md:hidden  flex justify-between w-full'
  >
    <motion.div variants={sidebar}  />
    <Navigation />
    <MenuToggle toggle={() => sidebarToogle()} />
    <div>
        <Link href="/">
          <Image 
            src="/assets/images/HOM_LOGO.png"
            alt="logo"
            width={65}
            height={50}
            className=' rounded-3xl'
          />
        </Link> 
    </div>
  </motion.nav>        
 </>  )
}

export default Navbar