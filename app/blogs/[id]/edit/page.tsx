import { fetchBlogById, fetchTags } from "@/app/lib/data";
import { notFound } from "next/navigation";
import EditForm from "./edit-form";

export default async function Page(
  { params }
    :
    { params: { id: string } }
) {
  const id = params.id;

  const [blog, tags] = await Promise.all([
    fetchBlogById(id),
    fetchTags()
  ]);

  if (!blog) {
    notFound();
  }

  return (
    <div className="main-box px-10 py-8 rounded-xl">
      <EditForm blog={blog} tags={tags} />
    </div>
  );
}
