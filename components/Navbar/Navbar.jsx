'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { signIn } from 'next-auth/react';
import { useParams,usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

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
  const {status,data} = useSession();
  function sidebarToogle(){
    toggleOpen();
  }
  
  return (
  <>  
    <nav 
      className=' sticky z-50 bg-white hidden  md:flex justify-between w-full p-2 shadow-sm' >
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
      <div className=' w-2/6 flex justify-between pt-5 font-semibold '>
            <Link href="/products" 
                  className='orange_gradient hover:text-orange-700 hover:border-b-4 duration-150 hover:border-orange-600'>
                Products
            </Link> 
            <Link href="/#TopProducts" className='orange_gradient hover:text-orange-700 duration-150 hover:border-b-4 hover:border-orange-600'>
                Top Products
            </Link> 
            <Link href="/#AboutUs" className='orange_gradient hover:text-orange-700 hover:border-b-4 duration-150 hover:border-orange-600 '>
                About Us
            </Link>   
      </div>
        
      <div className='pt-5 font-semibold '>

          <input
            type="button"
            onClick={() => signIn()}   
            className="p-1 mr-4 orange_gradient border-2 rounded-md border-orange-500 bg-orange-500 hover:scale-110 duration-300"
            value={(status == "authenticated")? "Dashboard" : "Log In"}  
            />
          <a 
            href="https://www.google.com/maps/@30.3944472,76.8092398,3a,75y,92.3h,82.74t/data=!3m6!1e1!3m4!1sRzU-rW3CMIMg4w_nN8O5bQ!2e0!7i13312!8i6656?entry=ttu" 
            target='_blank' 
            className=' bg-orange-400 p-2 rounded-md border-[3px] text-white hover:border-orange-500  hover:orange_gradient duration-300'>
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
      className=' sticky z-50 bg-white   md:hidden  flex justify-between w-full shadow-sm'
  >
    <motion.div variants={sidebar}  />
    <Navigation shutdown={toggleOpen} />
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