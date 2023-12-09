import { WidgetSkeleton } from "../skeletons";

export default function Widget() {
  return (
    <ul className="flex flex-col ">
      <li className="px-2 py-3 rounded-lg secondary-box mb-5">
        <h3 className="text-lg font-semibold mb-3">Most popular in the last 30 days</h3>
        <ul className="text-sm pl-5 flex flex-col gap-1 text-neutral-300">
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            A new method to validate URLs in JavaScript (2023 edition)
          </li>
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            How to import JSON files in ES modules (Node.js)
          </li>
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            Property order is predictable in JavaScript objects since ES2015
          </li>
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            Web Weekly #112
          </li>
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            Top-level await is available in Node.js modules
          </li>
        </ul>
      </li>
      <li className="px-2 py-3 rounded-lg secondary-box mb-5">
        <h3 className="text-lg font-semibold mb-3">Hacker News Hits</h3>
        <ul className="text-sm pl-5 flex flex-col gap-1 text-neutral-300">
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            HTTP headers for the responsible developer
          </li>
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            HTTP headers for the responsible developer
          </li>
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            HTTP headers for the responsible developer
          </li>
          <li className="relative hover:text-neutral-200 transition-colors">
            <span className="-left-4 top-1.5 w-2 h-2 rounded-full bg-current absolute"></span>
            HTTP headers for the responsible developer
          </li>
        </ul>
      </li>
      <WidgetSkeleton />
    </ul>
  );
}
