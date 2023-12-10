import '@/app/ui/global.css'
import { openSans } from '@/app/ui/fonts'
import Navbar from './ui/navbar/navbar';
import Footer from './ui/footer';
import NotAvailable from './ui/not-available';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aktaion Blog'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appStatus = process.env.ENV
  return (
    <html lang="en">
      <body className={openSans.className}>
        {appStatus === 'development' && (
          <>
            <Navbar />
            <main className='max-w-screen-xl sm:mt-44 mt-32 mx-auto px-10'>
              {children}
            </main>
            <Footer />
          </>
        )}
        {appStatus === 'production' && (
          <NotAvailable />
        )}
      </body>
    </html>
  );
}
