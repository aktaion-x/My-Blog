import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export function BlogSkeleton() {
  return (
    <li className="w-full py-5 px-5 main-box rounded-xl opacity-60">
      <div className="mb-2 h-7 skeleton md:w-96 rounded-lg"></div>
      <div className="flex gap-2 mb-4 text-sm">
        <div className="h-6 skeleton w-24 rounded-md"></div>
        <ul className="flex gap-1 list-none">
          <TopicsSkeleton />
        </ul>
      </div>
      <ul>
        <li className="skeleton h-4 mb-2 rounded-md"></li>
        <li className="skeleton h-4 mb-2 rounded-md w-3/4"></li>
        <li className="skeleton h-4 mb-2 rounded-md w-2/4"></li>
      </ul>
      <p className="mt-5 skeleton h-4 mb-2 rounded-md w-32"></p>
    </li>
  );
}

export function WidgetSkeleton() {
  return (
    <li className="px-2 py-5  rounded-lg secondary-box opacity-70 mb-5">
      <div className="skeleton h-6 rounded-md mb-3 w-52"></div>
      <ul className="text-sm flex flex-col gap-1 text-neutral-300">
        <li className="skeleton h-4 mb-2 rounded-md w-11/12"></li>
        <li className="skeleton h-4 mb-2 rounded-md w-9/12"></li>
        <li className="skeleton h-4 mb-2 rounded-md w-10/12"></li>
      </ul>
    </li>
  );
}

export function TopicsSkeleton() {
  return (
    <>
      <li className="skeleton h-6 w-16 bg-opacity-20 px-2 py-[1px] rounded-md"></li>
      <li className="skeleton h-6 w-20 bg-opacity-20 px-2 py-[1px] rounded-md"></li>
      <li className="skeleton h-6 w-14 bg-opacity-20 px-2 py-[1px] rounded-md"></li>
    </>
  );
}

export function PaginationSkeleton() {
  return (
    <div className="flex justify-center items-center gap-2 my-14">
      <li className="bg-neutral-900 bg-opacity-50 text-neutral-700 pointer-events-none w-10 h-10 flex items-center justify-center rounded-lg s"><ArrowLeftIcon className="w-4" /></li>
      <li className="bg-neutral-900 bg-opacity-50 text-neutral-700 pointer-events-none w-10 h-10 flex items-center justify-center rounded-lg s">...</li>
      <li className="bg-neutral-900 bg-opacity-50 text-neutral-700 pointer-events-none w-10 h-10 flex items-center justify-center rounded-lg s"><ArrowRightIcon className="w-4" /></li>
    </div>
  );
}

