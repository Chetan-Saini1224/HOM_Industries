

import { Home,TopProducts,AboutUs,Footer } from '@/sections'
import Banner from '@/components/Banner'



export default function App() {
  return (
  <>  
         <section id="Home" className='padding_x'>
            <Home />
         </section>
         <section className='padding_x'>
              <div className='rounded-md w-full'>
                  <Banner />
               </div>
         </section>
         <section className='padding_x padding_y' id="TopProducts">
            <TopProducts />   
         </section>
         <section id="AboutUs" className='padding_x padding_y'>
             <AboutUs /> 
         </section>
         <section id="Footer" className='padding_x'>
            <Footer />
         </section>
   </>   
  )
}
