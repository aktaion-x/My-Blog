'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const FormSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: 'Please set a title.',
  }),
  subtitle: z.string({
    invalid_type_error: 'Please set a subtitle.',
  }),
  tags: z.array(z.number()),
  content: z.string({
    invalid_type_error: 'Please set a subtitle.',
  }),
})

const CreateBlog = FormSchema.omit({ id: true })

export type State = {
  errors?: {
    title?: string[];
    subtitle?: string[];
    tags?: string[];
    content?: string[];
  };
  message?: string | null;
};

export async function createBlog(prevState: State, formData: FormData) {
  // validate tags
  const tagsString = formData.get('tags')?.toString() || '';
  const tagsArray = tagsString.split(',').map(n => Number(n))

  const validatedFields = CreateBlog.safeParse({
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    tags: tagsArray,
    content: formData.get('content')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Blog.',
    }
  }

  const { title, subtitle, content, tags } = validatedFields.data;

  const date = new Date().toISOString().split('T')[0];

  const tagsExpression = `{${tags.toString()}}`
  try {
    await sql`
    INSERT INTO blogs (title, subtitle, content, date, tags)
    VALUES (${title}, ${subtitle}, ${content}, ${date}, ${tagsExpression})
  `;
  } catch (error) {
    console.log(error)
    return {
      message: 'Database Error: Failed to Create Blog'
    }
  }

  revalidatePath('/');
  redirect('/');
}


const UpdateBlog = FormSchema.omit({ id: true, date: true });

export async function updateBlog(id: string, formData: FormData) {
  // validate tags
  const tagsString = formData.get('tags')?.toString() || '';
  const tagsArray = tagsString.split(',').map(n => Number(n))

  const { title, subtitle, content, tags } = UpdateBlog.parse({
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    content: formData.get('content'),
    tags: tagsArray,
  });

  const tagsExpression = `{${tags.toString()}}`
  try {
    await sql`
    UPDATE blogs
    SET title = ${title}, subtitle = ${subtitle}, content = ${content}, tags = ${tagsExpression}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Blog'
    }
  }

  revalidatePath('/');
  redirect('/');
}


export async function deleteBlog(id: string) {
  console.log('object')
  try {
    await sql`DELETE FROM blogs WHERE id = ${id}`;
    revalidatePath('/');
    redirect('/');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Blog'
    }
  }
}
