import Link from "next/link";
import { Tag as TagType } from "@/app/lib/definitions";

export default function Topic(
  {
    topic
  }: {
    topic: TagType
  }
) {
  return (
    <Link
      style={{ backgroundColor: topic.color + '33', color: topic.color }}
      className='px-[10px] text-sm py-[2px] rounded-xl' href={`/blogs/topics/${topic.id}`}>
      {topic.name}
    </Link>
  );
}
