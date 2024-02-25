
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import AuthProvider from '@/context/AuthProvider'
import { TanstackProvider } from '@/context/TanstackProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HOM Industries',
  description: 'LPG gas Pipe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <TanstackProvider>
        <div className='main'>
        <div className='gradient' />
        </div>
        <main className='relative' >
        <Navbar />
        {children}
        </main>
        </TanstackProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
