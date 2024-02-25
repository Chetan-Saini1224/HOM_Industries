"use client"

import { useQuery } from "@tanstack/react-query";

const UpdateModal = ({id}) => {
  const {data,isLoading,} = useQuery({
    queryKey: ['product'],
    queryFn: async function getData(){
            const res = await fetch(`/api/products/${id}`);
            if(res.ok) return res.json();
            else throw new Error("server sie error"); 
      }
  })
  return (
    <div>
        <p>
          {JSON.stringify(data,null,2)}
        </p>
    </div>
  )
}

export default UpdateModal