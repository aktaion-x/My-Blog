import Blog from "../ui/blogs/blog";
import Pagination from "./pagination";
import Search from "./search";
import Topics from "./topics";

export default function Page() {
  return (
    <div>
      <h2 className="text-4xl mb-3">All Blogs</h2>
      <p className="sm:text-base text-sm">Read articles about Vue.js, JavaScript, CSS, Test Driven Development, and Front-End Architecture in general. My blog focuses heavily on Web Development, but occasionally I also write articles about personal topics.</p>
      <div className="flex flex-col gap-3  md:w-3/4 mx-auto mt-8 mb-12">
        <Search placeholder="Search Blogs..." />
        <Topics />
      </div>
      <ul className="flex flex-col gap-5 md:w-3/4 mx-auto justify-center items-center">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </ul>
      <Pagination />
    </div>
  );
}
