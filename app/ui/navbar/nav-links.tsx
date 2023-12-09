import Link from "next/link";
import { Bars2Icon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function NavLinks() {
  return (
    <>
      <ul className="
        sm:flex hidden justify-between items-center 
        lg:w-1/2 md:w-7/12 sm:w-9/12 pr-8
      ">
        <Links />
      </ul>
      <div className='block sm:hidden h-fit pr-5 cursor-pointer text-zinc-400 transition-colors hover:text-zinc-50'>
        <Bars2Icon className='w-7' />
      </div>
      <ul className="
        main-box rounded-2xl 
        absolute top-full
        flex hidden flex-col gap-2  
        mt-5 w-full py-2 px-3
      ">
        <Links />
      </ul>
    </>
  );
}

export function Links() {
  return (
    <>
      <li className='relative text-neutral-400 w-fit'>
        <Link className="hover:text-neutral-200 transition-colors" href='/blogs'>Blogs</Link>
      </li>
      <li className='relative text-neutral-400 w-fit'>
        <Link className="hover:text-neutral-200 transition-colors" href='/about'>About</Link>
      </li>
      <li className='relative text-neutral-400 w-fit'>
        <ArrowUpRightIcon className='absolute w-2 -right-2 top-1' />
        <Link className="hover:text-neutral-200 transition-colors" target='_blank' href='http://ghassan-athamin.site/'>Portfolio</Link>
      </li>
      <li className='relative text-neutral-400 w-fit'>
        <ArrowUpRightIcon className='absolute w-2 -right-2 top-1' />
        <Link className="hover:text-neutral-200 transition-colors" target='_blank' href='https://github.com/aktaion-x'>Github</Link>
      </li>
      {/* <button className='bg-red-900 transition-colors hover:bg-red-700 px-3 py-1 rounded-lg border-2 w-fit'>Logout</button> */}
    </>
  );
}

