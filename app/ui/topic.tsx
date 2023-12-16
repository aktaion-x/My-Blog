'use client';

import Link from "next/link";
import { Tag as TagType } from "@/app/lib/definitions";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from "react";

export default function Topic(
  {
    topic
  }: {
    topic: TagType
  }
) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter()

  // const [currentTag, setCurrentTag] = useState()
  const isCurrentTag = (currentId: number) => {
    const params = new URLSearchParams(searchParams);
    const currentTags = params.get('tags') || ''
    const tagsArray = currentTags.split(',')
    // console.log('tagsArray', tagsArray)
    if (tagsArray[0] !== '' && tagsArray.includes(topic.id.toString())) {
      return false;
    } else {
      return true;
    }
  }

  // console.log(currentTag)

  const handleClick = (id: number) => {
    const params = new URLSearchParams(searchParams);
    const currentTags = params.get('tags') || ''
    const tagsArray = currentTags.split(',')
    if (tagsArray[0] !== '' && tagsArray.includes(topic.id.toString())) {
      const filteredTags = tagsArray.filter(n => n !== topic.id.toString())
      const stringTags = filteredTags.toString();
      params.set('tags', stringTags)
      // return;
    } else if (tagsArray[0] === '') {
      params.set('tags', topic.id.toString())
    } else {
      tagsArray.push(topic.id.toString())
      const stringTags = tagsArray.toString();
      params.set('tags', stringTags)
    }
    // console.log('asd', tagsArray.toString())

    params.set('page', '1')
    // console.log('das', )
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div
      style={{
        backgroundColor: isCurrentTag(topic.id) ? topic.color + '33' : topic.color + '88',
        boxShadow: isCurrentTag(topic.id) ? '0px 0px 1px 2px transparent' : `0px 0px 1px 2px ${topic.color}`,
        cursor: isCurrentTag(topic.id) ? 'pointer' : `default`,
        color: topic.color
      }}
      className={`px-[10px] text-sm py-[1px] rounded-xl transition ${isCurrentTag(topic.id) ? 'hover:scale-105' : ''}`}
      onClick={() => handleClick(topic.id)}
    >
      {topic.name}
    </div>
  );
}
