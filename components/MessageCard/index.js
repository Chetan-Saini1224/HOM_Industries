import React from 'react'

const MessageCard = ({message}) => {
  return (
    <div className='flex flex-col gap-1 bg-slate-600 shadow-md p-1 rounded-sm border-2 border-orange-500'>
       <div className=''>
          <label className=' text-white text-sm font-semibold'>Message</label>
          <p className=' bg-slate-200 px-1 rounded-sm font-medium break-words'>{message.message} </p>
       </div>
        <div className=''>
          <label className=' text-white text-sm font-semibold'>Contact Number</label>
          <p className=' bg-slate-200 px-1 rounded-sm font-medium'>{message.number} </p>
       </div>
    </div>
  )
}

export default MessageCard