import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { PostMetadata } from '@/app/lib/definitions';

const getPostsMetadata = () => {
  const folder = 'dump/'
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => (file.endsWith('.md')))

  // get gray-matter data from each file
  const posts: PostMetadata[] = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`dump/${filename}`, 'utf8')
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: filename.replace('.md', ''),
    }
  })

  return posts
  // const slug = markdownPosts.map((file) => (file.replace('.md', '')))
  // return slug;
}

export default function Page() {
  const postMetadata = getPostsMetadata();
  return (
    <div>
      {postMetadata.map((file, i) => (
        <Link href={`/blogs/${file.slug}`} key={i}>
          <h2>{file.title}</h2>
          <h4>{file.subtitle}</h4>
          <p>{file.date}</p>
        </Link>
      ))}
    </div>
  );
}
