
import { Home,TopProducts,AboutUs,Footer } from '@/sections'
import Banner from '@/components/Banner'

export default function App() {
  return (
  <>
         <section id="Home" className='padding-x'>
            <Home />
         </section>
         <section className='padding-x'>
              <div className=' bg-orange-400 rounded-md w-full'>
                  <Banner />
               </div>
         </section>
         <section id="TopProducts" className='padding-x padding-y'>
            <TopProducts />   
         </section>
         <section id="AboutUs" className='padding-x padding-y'>
             <AboutUs /> 
         </section>
         <section id="Footer" className='padding-x padding-y'>
            <Footer />
         </section>
   </>   
  )
}
