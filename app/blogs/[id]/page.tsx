import { ShareIcon, LinkIcon } from "@heroicons/react/24/outline";
import fs from 'fs';
import Markdown from 'markdown-to-jsx'
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { SiFacebook, SiLinkedin } from "react-icons/si";
// import { blog } from "@/dump/blog";
import Topic from "@/app/ui/topic";
import { topics } from "@/dump/topics";
import { fetchBlogById } from "@/app/lib/data";

export default async function Page(
  { params, searchParams }
    :
    { params: { id: string }, searchParams: object }
) {
  // console.log(params.slug)
  const blog = await fetchBlogById(params.id)
  return (
    <div>
      <Markdown>{blog.content}</Markdown>
      <div>{blog.tags.map((tag) => (<Topic key={tag.id} topic={tag} />))}</div>
    </div>
  )
  return (
    <div className="max-w-[700px] mx-auto sm:text-lg">
      {/* <h2>{blog.title}</h2>
      <p className="mt-4 font-semibold">{blog.subtitle}</p>
      <div className="w-full bg-white my-10">
        <img src={blog.cover} alt="Blog Picture" className="mx-auto brightness-95" />
        <p className="bg-neutral-900 py-2 text-sm text-center border border-neutral-800">Photo by 傅甬 华 on Unsplash</p>
      </div>

      <div>
        {blog.content.map((element) => {
          switch (element.type) {
            case 'p':
              return (
                <p className="mb-10">{element.content}</p>
              )
            case 'h2':
              return (
                <h2 className="text-2xl sm:text-3xl mb-4">{element.content}</h2>
              )
            case 'code':
              return (
                <pre className="bg-neutral-950 border border-neutral-900 my-12 p-2">
                  <div className="main-box rounded-lg px-6 py-4">
                    <code className="text-base">{element.content}</code>
                  </div>
                </pre>
              )
          }
        })}
      </div>

      <div>
        <ul className="flex gap-1">
          <Topic topic={topics[0]} />
          <Topic topic={topics[1]} />
          <Topic topic={topics[2]} />
        </ul>

      </div>
      <div className="text-base flex justify-between items-center border-t border-neutral-800 pt-5 mt-20">
        <div>
          <p className="text-sm">{blog.createdAt}</p>
        </div>
        <div className="flex relative">
          <button className=" main-box p-2 rounded cursor-pointer"><ShareIcon className="w-5" /></button>
          <div className="hidden top-12 left-1/2 -translate-x-1/2 absolute flex flex-col bg-neutral-900 z-50 w-60 rounded-lg overflow-hidden border border-neutral-800" >
            <button className="flex gap-3 items-center px-3 py-2 hover:bg-neutral-800 transition-colors border-b border-neutral-950"><LinkIcon className="w-5" /> <span>Copy Link</span></button>
            <button className="flex gap-3 items-center px-3 py-2 hover:bg-neutral-800 transition-colors"><BsTwitterX /> <span>Share on X</span></button>
            <button className="flex gap-3 items-center px-3 py-2 hover:bg-neutral-800 transition-colors"><SiFacebook /> <span>Share on Facebook</span></button>
            <button className="flex gap-3 items-center px-3 py-2 hover:bg-neutral-800 transition-colors "><SiLinkedin /> <span>Share on Linkedin</span></button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

function getBlog(slug: string) {
  const file = `dump/${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  return content;
}
