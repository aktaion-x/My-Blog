import { fetchBlogsPages } from "../lib/data";
import Pagination from "./pagination";

export default async function PaginationHolder(
  { query, tags }
    :
    {
      query: string;
      tags: number[]
    }
) {
  const totalPages = await fetchBlogsPages(query, tags)

  return (
    <Pagination totalPages={totalPages} />
  );
}
