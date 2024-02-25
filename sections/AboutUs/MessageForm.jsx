"use client"
import React, { useState } from 'react'
import styles from "./aboutUs.module.css";
import { Suspense } from 'react';

const MessageForm = () => {

  const [data,setData] = useState({message:"",number:""});  
  const [status,setStatus] = useState("");  
  const [submitting,setSubmitting] = useState(false);  

    async function  handleSubmit(e) {
      e.preventDefault();
      setSubmitting(true);
      try {
        const res = await fetch('/api/messages',{
            method: 'POST',
            body : JSON.stringify(data)
        })
        const resData = await res.json();
        if(resData.error) throw new Error(resData.message);
        else setStatus(resData.message)
        setData({message:'',number:''}) 
      } 
      catch(err){
          console.log(err);
          setStatus(resData.message)
      } 
      finally{
          setSubmitting(false)
      }    
    }

  
  return (<>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-slate-200 p-3 rounded-md w-3/4">
        <p className=' font-semibold text-lg orange_gradient'>Contact Us</p>
        <div className={styles.input} >
            <label className=' font-medium text-sm'>Message</label>
            <textarea 
                value={data.message}
                onChange={(e) => setData({...data,message:e.target.value})} 
                disabled = {submitting}
                className={`${styles.inputField}`}
                placeholder='ex: Hi, I am jhon i want to connect'
                required 
            />
        </div>

        <div className={styles.input}>
           <label className=' font-medium text-sm'>Contact Number</label> 
           <input 
                value={data.number}
                type="number"
                disabled = {submitting}
                placeholder='Enter 10 Digit Contact Number'
                onChange={(e) => {
                 if(e.target.value.length > 10) return;   
                 else setData({...data,number:e.target.value});
                }}
                className={`${styles.inputField}`}
                required  
            />
        </div>

        <div className=' flex gap-4'>
        <input 
            type='submit'
            value="Send"
            disabled = {submitting}
            className=" text-white font-semibold bg-orange-500 rounded-sm w-fit px-2 py-1 hover:bg-orange-700 delay-75"
        />
        {(status) && <p className=" text-yellow-600 font-semibold py-2">. {status}</p>}
        </div> 
        
    </form>
  </>)
}


const FormResponse = ({}) =>{

}



export default MessageForm