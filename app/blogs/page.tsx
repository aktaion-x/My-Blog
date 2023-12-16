import { Suspense } from "react";
import BlogsHolder from './blogs-holder'
import { fetchBlogs, fetchBlogsPages } from "../lib/data";
import Blog from "../ui/blogs/blog";
import Pagination from "./pagination";
import Search from "./search";
import Topics from "./topics";
import { BlogSkeleton, PaginationSkeleton, TopicsSkeleton } from "../ui/skeletons";
import PaginationHolder from "./pagination-holder";

export default async function Page({ searchParams }
  :
  {
    searchParams?: {
      query?: string;
      page?: string;
      tags?: string;
    };
  }
) {
  let tags = searchParams?.tags?.split(',').map(n => Number(n))
  tags = tags ? tags : [];
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <h2 className="text-4xl mb-3">All Blogs</h2>
      <p className="sm:text-base text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio beatae voluptate reprehenderit repudiandae aliquam facere earum sit repellendus. Reprehenderit neque aliquid ipsum nam recusandae excepturi quae sapiente, distinctio possimus qui.</p>
      <div className="flex flex-col gap-3  md:w-3/4 mx-auto mt-8 mb-12">
        <Search placeholder="Search Blogs..." />
        <div className="flex sm:items-center gap-2">
          <p>Topics:</p>
          <ul className="flex flex-wrap gap-2">
            <Suspense fallback={<TopicsSkeleton />}>
              <Topics />
            </Suspense>
          </ul>
        </div>
      </div>
      <ul className="flex flex-col gap-5 md:w-3/4 mx-auto justify-center items-center">
        <Suspense key={Math.random()} fallback={<BlogSkeleton />}>
          <BlogsHolder currentPage={currentPage} query={query} tags={tags} />
        </Suspense>
      </ul>
      <Suspense fallback={<PaginationSkeleton />}>
        <PaginationHolder query={query} tags={tags} />
      </Suspense>
    </div>
  );
}
