import Link from "next/link";
import Topic from "../topic";
import { topics } from "@/dump/topics";
import { Blog as BlogType } from "@/app/lib/definitions";
import { formatDate } from "@/app/lib/utils";

export default function Blog({ blog }: { blog: BlogType }) {
  return (
    <li className="py-3 px-5 main-box rounded-xl md:min-w-[600px] lg:min-w-[900px]">
      <Link href={`/blogs/${blog.id}`}>
        <h3 className="font-semibold mb-2">{blog.title}</h3>
      </Link>
      <div className="flex gap-2 mb-4 text-sm">
        <span>Topics: </span>
        <ul className="flex gap-1">
          {blog.tags.map((tag) => <Topic key={tag.id} topic={tag} />)}

          {/* <Topic topic={topics[1]} />
          <Topic topic={topics[2]} /> */}
        </ul>
      </div>
      <Link href={`/blogs/${blog.id}`}>
        <p className="text-sm text-neutral-400">{blog.subtitle}</p>
        <p className="mt-5 text-xs">{formatDate(blog.date)}</p>
      </Link>
    </li>
  );
}
