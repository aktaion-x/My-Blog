import { fetchBlogs } from "../lib/data";
import Blog from "../ui/blogs/blog";
import Pagination from "./pagination";

export default async function BlogsHolder({
  query,
  currentPage,
  tags
}: {
  query: string;
  currentPage: number;
  tags: number[];
}) {
  const blogs = await fetchBlogs(query, currentPage, tags);
  return (
    <>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </>
  );
}
