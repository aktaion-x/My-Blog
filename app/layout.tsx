import '@/app/ui/global.css'
import { openSans } from '@/app/ui/fonts'
import Navbar from './ui/navbar/navbar';
import Footer from './ui/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        <main className='max-w-screen-xl sm:mt-44 mt-32 mx-auto px-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
