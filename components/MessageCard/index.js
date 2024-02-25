'use client'
import React, { useState } from 'react'

const MessageCard = ({message,number}) => {
  const [del,setDel] = useState(false);
  async function deleteMessage(){
    setDel(true);
    try{
      const res = await fetch(`/api/messages/${message._id}`,{method:'delete'});
      const data = await res.json();
      alert(data.message);
    } 
    catch(err){
      console.error(err);
    }
    finally{
      setDel(false);
    }
  }
  return (
    <div className='flex flex-col gap-1 bg-slate-100 shadow-md p-1 rounded-sm border border-orange-500'>
      <div className=' flex justify-between'>
         <p className='orange_gradient font-semibold'>Message {number}</p>
         <button 
            className='rounded-md bg-orange-500 text-white px-1 py-[0.10rem] hover:bg-orange-700'
            onClick={deleteMessage}
            disabled={del}
            >
            Delete
         </button>
      </div>
       <div className=''>
          <label className=' text-sm font-semibold'>Message</label>
          <p className=' bg-slate-600 px-1 text-white rounded-sm font-medium break-words'>{message.message} </p>
       </div>
        <div className=''>
          <label className='  text-sm font-semibold'>Contact Number</label>
          <p className=' bg-slate-600 text-white px-1 rounded-sm font-medium'>{message.number} </p>
       </div>
    </div>
  )
}

export default MessageCard;