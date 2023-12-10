import Link from "next/link";
import Topic from "../topic";
import { topics } from "@/dump/topics";

export default function Blog() {
  return (
    <li className="py-3 px-5 main-box rounded-xl">
      <Link href='/'>
        <h3 className="font-semibold mb-2">Cracking a “Developer Tools Killer” script</h3>
      </Link>
      <div className="flex gap-2 mb-4 text-sm">
        <span>Topics: </span>
        <ul className="flex gap-1">
          <Topic topic={topics[0]} />
          <Topic topic={topics[1]} />
          <Topic topic={topics[2]} />
        </ul>
      </div>
      <Link href='/'>
        <p className="text-sm text-neutral-400">The other day I got an email from somebody who took one of my developer tools courses and he said he found a website that cannot be debugged. So I looked, found a nasty script and show you how to work around that one. You can watch the video on YouTube or read on… I</p>
        <p className="mt-5 text-xs">November 14th, 2023</p>
      </Link>
    </li>
  );
}
