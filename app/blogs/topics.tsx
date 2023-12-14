import Link from "next/link";
import Topic from "../ui/topic";
import { topics } from "../../dump/topics";
import { fetchTags } from "../lib/data";

export default async function Topics() {
  const tags = await fetchTags();
  return (
    <div className="flex sm:items-center gap-2">
      <p>Topics:</p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag.id}><Topic topic={tag} /></li>
        ))}
      </ul>
    </div>
  );
}
