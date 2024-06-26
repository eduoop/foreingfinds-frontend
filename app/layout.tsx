import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast';
import Header from './components/Headers/Header';
import { UserContextProvider } from './contexts/User/UserContext';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'ForeingFinds',
  description: 'Anuncie e descubra novos itens já!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
      </head>
      <html lang="en" className='flex flex-col'>
        <body>
          <ScrollToTop />
          <UserContextProvider>
            <Toaster toastOptions={{
              className: '',
              style: {
                border: '1px solid #ff6446',
                padding: '5px 10px',
                color: '#ff6446',
                fontWeight: '500'
              },
              iconTheme: {
                primary: '#ff6446',
                secondary: '#FFFAEE',
              },
            }} />
            <Header />
            {children}
          <Footer />
          </UserContextProvider>
        </body>
      </html>
    </>
  )
}
