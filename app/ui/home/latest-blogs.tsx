import Blog from "../blogs/blog";
import { BlogSkeleton } from "../skeletons";

export default function LatestBlogs() {
  return (
    <ul className="flex flex-col gap-5">
      <Blog />
      <BlogSkeleton />
    </ul>
  );
}
