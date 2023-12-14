import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  BlogRaw,
  Blog,
  Tag
} from './definitions';


export async function fetchBlogs() {
  noStore();
  try {
    const data = await sql<BlogRaw>`
      SELECT blogs.id, blogs.title, blogs.subtitle, blogs.tags, blogs.cover, blogs.date
      FROM blogs
      ORDER BY blogs.date DESC
      `;

    const tagsQuery = data.rows.map((blog) => {
      // hardcode the query for unhandled error
      const query = `SELECT * FROM tags WHERE tags.id IN (${blog.tags.join(', ')});`
      return sql.query(query);
    })

    const blogs: Blog[] = []

    const tags = await Promise.all([...tagsQuery]);
    tags.map((tag, i) => {
      blogs.push({ ...data.rows[i], tags: tag.rows })
    })


    // const blogs = data.rows;
    return blogs;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest blogs.');
  }
}

export async function fetchTags() {
  noStore();
  try {
    const data = await sql<Tag>`SELECT * FROM tags`;

    const tags = data.rows;
    return tags;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest tags.');
  }
}

export async function fetchBlogById(id: string) {
  noStore();
  try {
    const data = await sql<BlogRaw>`SELECT * FROM blogs WHERE id = ${id}`;

    const tags = await fetchBlogTags(data.rows[0].tags)


    const blog = { ...data.rows[0], tags };
    return blog;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest blog.');
  }
}

export async function fetchBlogTags(tags: number[]) {
  noStore();
  try {
    const queryString = `SELECT * FROM tags WHERE tags.id IN (${tags.join(', ')});`
    const query = await sql.query(queryString);

    // const blogs: Blog[] = []

    // const tags = await Promise.all([...tagsQuery]);
    // tags.map((tag, i) => {
    //   blogs.push({ ...data.rows[i], tags: tag.rows })
    // })
    return query.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest tags.');
  }
}
