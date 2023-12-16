'use client';

import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

export default function ThreeDots({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute right-3 top-3 z-50">
      <div onClick={() => setIsOpen(!isOpen)} className="p-[10px] transition-colors hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer">
        <BsThreeDots />
      </div>
      <div className="absolute top-8 right-0  w-52 z-50">
        {isOpen && (
          <ul className="flex flex-col gap-1 py-2 px-1 transition-all bg-neutral-950 overflow-hidden border-2 border-neutral-600 rounded-lg">
            {children}
          </ul>
        )}
      </div>
    </div>
  );
}
