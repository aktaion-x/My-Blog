'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import useKeyboardShortcut from 'use-keyboard-shortcut'

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter()

  // Shortcuts for the 
  const ref = useRef<HTMLInputElement>(null)
  const { flushHeldKeys } = useKeyboardShortcut(
    ["/"],
    shortcutKeys => {
      setTimeout(() => {
        ref.current?.focus();
      }, 0);
    },
    {
      overrideSystem: false,
      ignoreInputFields: true,
      repeatOnHold: false
    }
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-full sm:w-3/4 lg:w-2/4 search-input">
      <input
        className=" relative block w-full rounded-xl outline-none main-box py-[9px] pl-10 text-sm outline-2 placeholder:text-neutral-200 focus:border-solid focus:placeholder:text-neutral-400 text-neutral-200 caret-neutral-200"
        onChange={e => handleSearch(e.target.value)}
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        ref={ref}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-200  peer-focus:text-gray-900" />
    </div>
  );
}
