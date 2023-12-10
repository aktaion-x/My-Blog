import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
const paginationBox = 'secondary-box w-10 h-10 flex items-center justify-center rounded-lg';
const disabled = 'bg-neutral-900 bg-opacity-50 text-neutral-600 pointer-events-none w-10 h-10 flex items-center justify-center rounded-lg ';
const active = 'bg-neutral-200 pointer-events-none text-black font-bold w-10 h-10 flex items-center justify-center rounded-lg';

export default function Pagination() {
  return (
    <div className="my-14">
      <div className='flex items-center justify-center gap-5'>
        <Link className={disabled} href='/'><ArrowLeftIcon className='w-4' /></Link>
        <ul className='flex items-center justify-center gap-2'>
          <Link className={active} href=''>1</Link>
          <Link className={paginationBox} href=''>2</Link>
          <Link className={paginationBox} href=''>3</Link>
          <Link className={paginationBox} href=''>...</Link>
          <Link className={paginationBox} href=''>10</Link>
          <Link className={paginationBox} href=''>11</Link>
        </ul>
        <Link className={paginationBox} href='/'><ArrowRightIcon className='w-4' /></Link>
      </div>
    </div>
  );
}
