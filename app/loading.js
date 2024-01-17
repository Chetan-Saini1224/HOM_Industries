import Image from "next/image"

//it will create the suspense bounder around the children
export default function Loading() {
  
  return <>
    <div className=" h-[80vh] flex justify-center items-center">
      <div className=" flex items-center flex-col">
        <Image
          src="/assets/images/HOM_LOGO.png"
          alt="Company Logo"
          width={100}
          height={80}
          className=" rounded-3xl animate-bounce"
        /> 
        <p className=" w-3/5 text-center font-bold text-sm">
            Rubber water hose handle hot water upto 212°F & 
            cold weather temperature upto -50°F.
        </p>
       </div> 
    </div>
  </>
}