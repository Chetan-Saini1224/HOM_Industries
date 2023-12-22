"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./signIn.module.css";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'

function signin() {
  const texts = ["We Provide Durability.",
                 "We Ensure Quality.",
                 "We Build Trust."]
  const userName = useRef("");
  const password = useRef("");
  const searchParam = useSearchParams();
  const [error,setError] = useState(false);
  
  useEffect(() => {
    if(searchParam.get("error")) setError(true);
  },[])
  
  async function handleSubmit(e) {
      e.preventDefault();
      console.log(userName.current,userName.current.value)
      await signIn("credentials",{
        username: (userName.current.value),
        password : (password.current.value),
        redirect: true,
        callbackUrl : "/add_products"
      })
  }

  return (
    <div className=" h-[80vh] flex justify-center items-center  ">
      <div className="w-2/4 h-full relative">
          <div className={styles.firstSpin}>
           <Image
              src="/assets/images/DURABLE.png"
              width={220}
              height={220}
              className="rounded-full" 
            />
          </div>
          <div className={styles.secondSpin}>
           <Image
              src="/assets/images/fire_resistant.png"
              width={220}
              height={220}
              className=" rounded-full"
            />
          </div>
      </div>
      <form onSubmit={handleSubmit} className=" px-5 flex-1 flex flex-col gap-2">
        <div className=" flex flex-col mb-3">
         <label className=" mb-1 text-xs font-bold">Username </label>
         <input type="text" className={styles.input} ref={userName} placeholder="Username" />
        </div> 
        <div className=" flex flex-col mb-1">
         <label className=" mb-1 text-xs font-bold">Password </label>
         <input type="password" className={styles.input} ref={password} placeholder="Password" />
        </div>
        <input type="submit" value="Submit" className={styles.submitBtn} />  
        {error && <p className=" text-red-600 w-3/4 text-xs">Authentication Failed. Please check your credentials and true again.</p>}
      </form>       
    </div>
  );
}

export default signin;