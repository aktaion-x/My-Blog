import Link from "next/link";
import { WidgetSkeleton } from "../skeletons";

export default function Widget() {
  return (
    <ul className="flex flex-col ">
      <li className="px-2 py-3 rounded-lg secondary-box mb-5">
        <h3 className="text-lg font-semibold mb-3">Lorem, ipsum dolor sit amet</h3>
        <ul className="text-sm pl-5 flex flex-col gap-1 text-neutral-400">
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quae excepturi
          </Link>
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Link>
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione facere dignissimos!
          </Link>
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor
          </Link>
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </Link>
        </ul>
      </li>
      <li className="px-2 py-3 rounded-lg secondary-box mb-5">
        <h3 className="text-lg font-semibold mb-3">Lorem, ipsum dolor</h3>
        <ul className="text-sm pl-5 flex flex-col gap-1 text-neutral-400">
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Link>
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione facere dignissimos!
          </Link>
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor
          </Link>
          <Link href="#" className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-neutral-400 absolute"></span>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </Link>
        </ul>
      </li>
      <WidgetSkeleton />
    </ul>
  );
}
