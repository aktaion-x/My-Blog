const { db } = require('@vercel/postgres');
const {
  blogs,
  tags
} = require('../app/lib/placeholder-data.js');

async function seedBlogs(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "blogs" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS blogs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    tags INTEGER[],
    content TEXT NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "blogs" table`);

    // Insert data into the "blogs" table
    console.log(blogs)
    const insertedBlogs = await Promise.all(
      blogs.map(
        (blog) => client.sql`
        INSERT INTO blogs (title, subtitle, tags, content, date)
        VALUES (${blog.title}, ${blog.subtitle},${blog.tags}, ${blog.content}, ${blog.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedBlogs.length} blogs`);

    return {
      createTable,
      blogs: insertedBlogs,
    };
  } catch (error) {
    console.error('Error seeding blogs:', error);
    throw error;
  }
}

async function seedTags(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "tags" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "tags" table`);

    // Insert data into the "tags" table
    console.log(tags)
    const insertedTags = await Promise.all(
      tags.map(
        (tag) => client.sql`
        INSERT INTO tags (name, color)
        VALUES (${tag.name}, ${tag.color})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedTags.length} tags`);

    return {
      createTable,
      tags: insertedTags,
    };
  } catch (error) {
    console.error('Error seeding tags:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedTags(client);
  await seedBlogs(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
