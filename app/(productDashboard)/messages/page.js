'use client'

import {Suspense} from "react";
import MessageCard from "@/components/MessageCard";
import { useSuspenseQuery } from "@tanstack/react-query";
const Messages =  () => {
  const {data:messages,isLoading,error} = useSuspenseQuery({
    queryKey: ['product'],
    queryFn: async function getData(){
            const res = await fetch(`/api/messages`,{method:'get'});
            if(res.ok) return res.json();
            else throw new Error("server side error"); 
      },
      placeholderData:[]
  })

  return (
  <Suspense fallback={<div>Loading...</div>}>
    <div className=' p-1 flex gap-1 flex-col'>
       {messages.map((val,idx) =>{  
         return <MessageCard message={val} key={val._id} number={idx+1} /> 
        })}
    </div>
  </Suspense>   
  )
}

export default Messages;