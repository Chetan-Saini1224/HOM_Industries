
import { Home,TopProducts,AboutUs,Footer } from '@/sections'
import Banner from '@/components/Banner'

import Head from 'next/head'

export default function App() {
  return (
  <>
         <Head>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
         </Head>   
         <section id="Home" className='padding-x'>
            <Home />
         </section>
         <section className='padding-x'>
              <div className='rounded-md w-full'>
                  <Banner />
               </div>
         </section>
         <section className='padding-x padding-y' id="TopProducts">
            <TopProducts />   
         </section>
         <section id="AboutUs" className='padding-x padding-y'>
             <AboutUs /> 
         </section>
         <section id="Footer" className='padding-x'>
            <Footer />
         </section>
   </>   
  )
}
