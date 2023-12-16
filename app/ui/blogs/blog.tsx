import Link from "next/link";
import Topic from "../topic";
import { topics } from "@/dump/topics";
import { Blog as BlogType } from "@/app/lib/definitions";
import { formatDate } from "@/app/lib/utils";
import { BsThreeDots } from "react-icons/bs";
import BlogActions from "./blog-actions";

export default function Blog({ blog }: { blog: BlogType }) {
  return (
    <div className="py-3 max-w- px-5 main-box rounded-xl w-full">
      <li className="">
        <Link href={`/blogs/${blog.id}`}>
          <h3 className="font-semibold mb-2">{blog.title}</h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-4 text-sm">
          <span>Topics: </span>
          <ul className="flex gap-1 flex-wrap">
            {blog.tags.map((tag) => <Topic key={tag.id} topic={tag} />)}
          </ul>
        </div>
        <Link href={`/blogs/${blog.id}`}>
          <p className="text-sm text-neutral-400 mb-10">{blog.subtitle}</p>
          <p className="text-xs">{formatDate(blog.date)}</p>
        </Link>
      </li>
      <BlogActions blogId={blog.id} />
    </div>
  );
}
