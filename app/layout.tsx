
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Nunito } from "next/font/google";
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './action/getCurrentUser';
import SearchModal from './components/modals/SearchModal';



const nunito = Nunito({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext']
})

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
