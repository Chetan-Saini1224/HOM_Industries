
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import TextAnim from '@/animations/TextAnimation';

const Home = () => {
   

  return (
  <section  className='relative h-96 flex justify-between items-stretch w-full '>

  <div className='min-w-full flex flex-col lg:flex-row'>

    <div className='w-full lg:w-4/6 h-3/4 flex flex-col gap-4 justify-center'>
      <div className='h-3/6 md:h-2/6 font-semibold text-xl lg:text-2xl'>
        <TextAnim />

      </div>
      <Link href="/products" className='animate-pulse orange_gradient border-2 border-orange-500 font-semibold p-1 w-fit text-center rounded-sm'>
         Explore Products
      </Link>
    </div>

  <div className='lg:w-2/6 w-full flex items-center justify-around  '>
    <div className=' animate-bounce w-2/6'>
      <Image
        src="/assets/images/DURABLE.png"
        alt="Home_Image"
        width={200}
        height={200}
        className='rounded-full '
      />
    </div>
    <div className='animate-bounce animation-delay-300 w-2/5'>
      <Image
        src="/assets/images/fire_resistant.png"
        alt="Home_Image"
        width={200}
        height={200}
        className='rounded-full h-fit will-change-contents'
      />
    </div>    
    </div>
  </div>

</section>

  )
}

export default Home