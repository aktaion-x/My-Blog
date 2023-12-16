import { fetchLatestBlogs } from "@/app/lib/data";
import Blog from "../blogs/blog";
import { BlogSkeleton } from "../skeletons";

export default async function LatestBlogs() {
  const blogs = await fetchLatestBlogs();
  return (
    <>
      {blogs.map(blog => (<Blog key={blog.id} blog={blog} />))}
    </>
  );
}
