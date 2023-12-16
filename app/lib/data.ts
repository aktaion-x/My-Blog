import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  BlogRaw,
  Blog,
  Tag
} from './definitions';
const ITEMS_PER_PAGE = 1;


export async function fetchLatestBlogs() {
  noStore();
  try {
    const data = await sql<BlogRaw>`
      SELECT blogs.id, blogs.title, blogs.subtitle, blogs.tags, blogs.date
      FROM blogs
      ORDER BY blogs.date DESC
      LIMIT 6;
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

export async function fetchBlogs(
  query: string,
  currentPage: number,
  tags: number[]
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const tagsArray = tags
  noStore();
  try {
    const data = await sql<BlogRaw>`
      SELECT blogs.id, blogs.title, blogs.subtitle, blogs.tags, blogs.date
      FROM blogs
      WHERE
        (blogs.title ILIKE ${`%${query}%`} OR
        blogs.subtitle ILIKE ${`%${query}%`}) AND
        blogs.tags @> ARRAY[${tagsArray}::integer[]]
      ORDER BY blogs.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
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

export async function fetchBlogsPages(query: string, tags: number[]) {
  noStore();
  const tagsArray = tags
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const temp = [1, 3]
    console.log(temp.toString())
    const count = await sql`
    SELECT COUNT(*)
    FROM blogs
    WHERE
      (blogs.title ILIKE ${`%${query}%`} OR
      blogs.subtitle ILIKE ${`%${query}%`}) AND
      blogs.tags @> ARRAY[${tagsArray}::integer[]];
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;

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

    // if blog doesn't exists return null
    if (data.rows.length === 0) {
      return null;
    }

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

    return query.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest tags.');
  }
}
