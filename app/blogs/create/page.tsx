import { fetchTags } from "@/app/lib/data";
import CreateForm from "./create-form";

export default async function Page() {
  const tags = await fetchTags();
  return (
    <div className="main-box px-10 py-8 rounded-xl">
      <CreateForm tags={tags} />
    </div>
  );
}
