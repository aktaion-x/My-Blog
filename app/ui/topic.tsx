import Link from "next/link";
import { Topic as TopicType } from "@/app/lib/definitions";

export default function Topic(
  {
    topic
  }: {
    topic: TopicType
  }
) {
  return (
    <Link
      style={{ backgroundColor: topic.color + '33', color: topic.color }}
      className='px-2 text-sm py-[1px] rounded-xl' href={`/blogs/topics/${topic.url}`}>
      {topic.name}
    </Link>
  );
}
