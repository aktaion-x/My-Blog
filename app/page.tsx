import Image from 'next/image';
import Header from '@/app/ui/home/header';
import Footer from './ui/footer';
import LatestBlogs from './ui/home/latest-blogs';
import Widget from './ui/home/widget';
import { Suspense } from 'react';
import { BlogSkeleton } from './ui/skeletons';

export default function Page() {
  return (
    <div>
      <Header />
      <div className='mt-36 flex md:flex-row flex-col h-fit gap-10'>
        <div className='md:w-8/12 flex flex-col gap-5 mb-10'>
          <h2 className='pt-5'>Latest blogs</h2>
          <ul className="flex flex-col gap-5">
            <Suspense fallback={<BlogSkeleton />}>
              <LatestBlogs />
            </Suspense>
          </ul>
        </div>
        <div className='md:w-4/12 flex flex-col gap-5 rounded-lg'>
          <h2 className='pt-5'>New on the blog</h2>
          <Widget />
        </div>
      </div>
    </div>
  );
}
