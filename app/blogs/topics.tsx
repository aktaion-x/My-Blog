import Link from "next/link";
import Topic from "../ui/topic";
import { topics } from "../../dump/topics";
import { fetchTags } from "../lib/data";

export default async function Topics() {
  const tags = await fetchTags();
  return (
    <>
      {tags.map((tag) => (
        <li key={tag.id}><Topic topic={tag} /></li>
      ))}
    </>

  );
}
