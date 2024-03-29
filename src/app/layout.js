import { Inter } from 'next/font/google'

import './globals.css'
// import Navbar from '@/components/navbar/Navbar'
// import Sidebar from '@/components/sidebar/Sidebar'
// import Footer from '@/components/footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className='flex h-screen overflow-hidden'>
          <Sidebar />
          <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
            <Navbar />
            <main>
              <div className='mx-4 max-w-screen-2xl p-4 md:p-6 2xl:p-10'>

              </div>
            </main>
            <Footer />

          </div>
        </div> */}
        {/* <Navbar /> */}
        {children}

      </body>
    </html>
  )
}
