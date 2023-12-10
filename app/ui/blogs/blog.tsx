import Link from "next/link";
import Topic from "../topic";
import { topics } from "@/dump/topics";

export default function Blog() {
  return (
    <li className="py-3 px-5 main-box rounded-xl">
      <Link href='/'>
        <h3 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h3>
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
        <p className="text-sm text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione, dolore ut quis perspiciatis maxime blanditiis molestias facere ipsa dolorum aperiam quibusdam tenetur illo quaerat eius est nostrum fuga vel.</p>
        <p className="mt-5 text-xs">November 14th, 2023</p>
      </Link>
    </li>
  );
}
