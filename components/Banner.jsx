import Image from "next/image"


const Banner = () => {
  return (
    <div className="flex gap-5 justify-around flex-wrap p-2">
        <Image
         src="/assets/images/pipes_qualites.jpg"
         alt="pipe details"
         width={300}
         height={300}
         className=" rounded-md "
        />
        <Image
         src="/assets/images/orange_steel_details.jpg"
         alt="pipe details"
         width={300}
         height={300}
         className=" rounded-md"
        />
        <Image
         src="/assets/images/black_pipe_details.jpeg"
         alt="pipe details"
         width={200}
         height={300}
         className=" rounded-md hidden md:block"
        />
    </div>
  )
}

export default Banner