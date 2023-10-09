import './globals.css'
import type { Metadata } from 'next'
import { Montserrat , Poppins } from 'next/font/google'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Providers } from '@/redux/Provider';
import Cart from '@/components/Cart/Cart';
import { store } from '@/redux/store';

const poppins = Poppins({
  subsets :["latin"],
  weight : ["400","500","700"],
  style : ["italic","normal"],
  variable : "--font-poppins"

});
const montserrat = Montserrat({
  subsets :["latin"],
  weight : ["400","500","700"],
  style : ["italic","normal"],
  variable : "--font-poppins"

})

export const metadata: Metadata = {
  title: 'Corazone',
  description: 'Shop game with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body > 
        <Providers>
          <Cart/>
        <Header/>
        <main className='bg-primary-gradient min-h-screen'>{children}
        </main>
       <Footer/> 
       </Providers>
       </body>
    </html>
  )
}