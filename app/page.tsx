import Image from 'next/image';
import Header from '@/app/ui/home/header';
import Footer from './ui/footer';
import LatestBlogs from './ui/home/latest-blogs';
import Widget from './ui/home/widget';

export default function Page() {
  return (
    <div>
      <Header />
      <div className='mt-36 flex md:flex-row flex-col h-fit gap-10'>
        <div className='md:w-3/4 flex flex-col gap-5 mb-10'>
          <h2 className='pt-5'>New on the blog</h2>
          <LatestBlogs />
        </div>
        <div className='flex flex-col gap-5 rounded-lg'>
          <h2 className='pt-5'>New on the blog</h2>
          <Widget />
        </div>
      </div>
    </div>
  );
}
