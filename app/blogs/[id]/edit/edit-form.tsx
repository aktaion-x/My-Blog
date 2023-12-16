'use client';

import { useFormState } from 'react-dom';
import { createBlog, updateBlog } from "@/app/lib/actions";
import { Blog, Tag } from '@/app/lib/definitions';
import { useState } from 'react';
const inputStyle = 'text-white bg-transparent pl-2 border-transparent focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-b-neutral-400 transition-colors caret-red-50 focus:ring-transparent w-full';


export default function EditForm({ blog, tags }: { blog: Blog, tags: Tag[] }) {
  const updateBlogWithId = updateBlog.bind(null, blog.id)

  const [tagsArray, setTagsArray] = useState<number[]>(blog.tags.map(tag => tag.id))
  const handleTagsArray = (tagId: number) => {
    setTagsArray(prev => {
      let newArray: number[] = []
      if (prev.includes(tagId)) {
        newArray = prev.filter(n => n != tagId)
      } else {
        newArray = [...prev, tagId]
      }
      return newArray
    })
    console.log(tagsArray)
  }

  return (
    <form action={updateBlogWithId} className="flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="mb-5">Edit a Blog</h2>
        <button className="px-3 py-2 border-2 rounded-lg bg-neutral-200 text-neutral-800 hover:bg-neutral-900 hover:text-neutral-200 transition-colors" type="submit">Update</button>
      </div>
      <div className='border-b border-b-neutral-600'>
        <input aria-describedby="title" defaultValue={blog.title} name='title' id='title' className={inputStyle} type="text" placeholder="Blog Title" autoFocus />
        <div id="title" aria-live="polite" aria-atomic="true">
        </div>
      </div>
      <div className='border-b border-b-neutral-600'>
        <input aria-describedby="subtitle" name='subtitle' id='subtitle' defaultValue={blog.subtitle} className={inputStyle} type="text" placeholder="Blog Subtitle" />
        <div id="subtitle" aria-live="polite" aria-atomic="true">
        </div>
      </div>
      <div className='border-b border-b-neutral-600 flex'>
        <label>
          Tags:
        </label>
        <input className='' aria-describedby="tags" name='tags' id='tags' value={tagsArray.toString()} type="hidden" />
        {tags.map((tag) => (
          <label className='flex relative' key={tag.id}>
            <span className={`${tagsArray.includes(tag.id) ? 'bg-slate-500' : ''} relative z-10 px-2`} onClick={() => handleTagsArray(tag.id)}>{tag.name}</span>
          </label>
        ))}
        <div id="tags" aria-live="polite" aria-atomic="true">
        </div>
      </div>
      <div className='border-b border-b-neutral-600'>
        <textarea aria-describedby="content" name='content' id='content' defaultValue={blog.content} className={inputStyle} rows={10} required placeholder="Blog Body"></textarea>
        <div id="content" aria-live="polite" aria-atomic="true">
        </div>
      </div>
    </form>
  );
}
