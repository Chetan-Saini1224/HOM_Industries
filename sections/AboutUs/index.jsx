'use client'

import InViewConatiner from "@/animations/InViewConatiner"
import MessageForm from "./MessageForm"
import Image from "next/image"
import {aboutUs, Address,OwnersDetail,contactDetails } from "@/constants"

const AboutUs = () => {
  return (
    <section >
      <p className=' font-extrabold text-2xl orange_gradient mb-2 border-b-4 border-b-slate-600'>
        About Us
      </p>
      <p className=" mb-8 text-md">
        {aboutUs}
      </p>
      <div className="flex gap-10 flex-col md:flex-row">  
        <InViewConatiner className="flex-1 flex flex-col justify-center items-center gap-10" >
           <MessageForm />  
           <div className=" flex gap-10">
              <Image
                src="/assets/social_icons/Insta.png"    
                alt="insta_icon"
                width={50}
                height={50}
              /> 
              <Image
                src="/assets/social_icons/facebook.png"    
                alt="facebook_icon"
                width={50}
                height={50}
              /> 
              <Image
                src="/assets/social_icons/whatsapp.png"    
                alt="whatsapp_icon"
                width={50}
                height={50}
              />         
           </div>
               
        </InViewConatiner>
        <InViewConatiner className="flex-1 flex flex-col justify-center items-center gap-16" >
         <div>
          <p className=" font-semibold">{Address.name}</p>     
          <p>{contactDetails.number.map((val,idx) => (
            <span key={idx}>{val} </span>
          ))}</p>
          <p>{contactDetails.email}</p>
          <p>{Address.localAddress}</p>
          <p> <span className=" font-bold">PinCode :</span> {Address.pincode}</p>
          <p>{Address.city}</p>
         </div>
         <div className=" flex gap-10">
          {OwnersDetail.map((val,idx) =>(
            <div key={idx} className="flex flex-col items-center gap-1">
              <Image
                src={val.photoPath}    
                alt="whatsapp_icon"
                width={100}
                height={100}
              />
              <p className=" text-s font-semibold">{val.name}</p>
              <p className=" text-xs font-semibold">{val.postion}</p>
            </div>   
          ))}
         </div>
        </InViewConatiner>
      </div>
    </section>     
  )
}

export default AboutUs