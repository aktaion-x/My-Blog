import Link from "next/link";
import Topic from "../ui/topic";
import { topics } from "../../dump/topics";

export default function Topics() {
  return (
    <div className="flex sm:items-center gap-2">
      <p>Topics:</p>
      <ul className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <li key={topic.url}><Topic topic={topic} /></li>
        ))}
      </ul>
    </div>
  );
}
