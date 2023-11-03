
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HOM Industries',
  description: 'LPG gas Pipe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='main'>
        <div className='gradient' />
      </div>
      <main className='relative' >
      <Navbar />
      {children}
      </main>
      </body>
    </html>
  )
}
