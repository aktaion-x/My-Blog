import { fetchBlogs } from "../lib/data";
import Blog from "../ui/blogs/blog";
import Pagination from "./pagination";
import Search from "./search";
import Topics from "./topics";

export default async function Page() {
  const blogs = await fetchBlogs();
  console.log(blogs)
  return (
    <div>
      <h2 className="text-4xl mb-3">All Blogs</h2>
      <p className="sm:text-base text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio beatae voluptate reprehenderit repudiandae aliquam facere earum sit repellendus. Reprehenderit neque aliquid ipsum nam recusandae excepturi quae sapiente, distinctio possimus qui.</p>
      <div className="flex flex-col gap-3  md:w-3/4 mx-auto mt-8 mb-12">
        <Search placeholder="Search Blogs..." />
        <Topics />
      </div>
      <ul className="flex flex-col gap-5 md:w-3/4 mx-auto justify-center items-center">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}
