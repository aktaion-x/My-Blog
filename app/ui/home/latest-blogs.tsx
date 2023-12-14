import { fetchBlogs } from "@/app/lib/data";
import Blog from "../blogs/blog";
import { BlogSkeleton } from "../skeletons";

export default async function LatestBlogs() {
  const blogs = await fetchBlogs();
  console.log(blogs)
  return (
    <ul className="flex flex-col gap-5">
      {blogs.map(blog => (<Blog key={blog.id} blog={blog} />))}
      <BlogSkeleton />
    </ul>
  );
}
