import Link from "next/link";
import ThreeDots from "../three-dots";
import { deleteBlog } from "@/app/lib/actions";

export default function BlogActions({ blogId }: { blogId: string }) {
  const deleteBlogWithId = deleteBlog.bind(null, blogId);

  return (
    <ThreeDots>
      <Link href={`/blogs/${blogId}/edit`} className="cursor-pointer px-2 py-1 rounded-lg hover:bg-neutral-900 border border-transparent hover:border-neutral-700">Edit</Link>
      <form action={deleteBlogWithId} className="cursor-pointer px-2 py-1 rounded-lg hover:bg-neutral-900 border border-transparent hover:border-neutral-700"><button type="submit">Delete</button></form>
      <li className="cursor-pointer px-2 py-1 rounded-lg hover:bg-neutral-900 border border-transparent hover:border-neutral-700">Copy</li>
    </ThreeDots>
  );
}
