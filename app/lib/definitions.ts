export type Blog = {
  title: string;
  subtitle: string;
  cover: string;
  tags: Tag[];
  date: Date;
  content: string
  id: string;
}

export type BlogRaw = Omit<Blog, 'tags'> & {
  tags: number[];
}

// export type BlogRaw = Omit<Blog, 'content'>

export type Tag = {
  color: string;
  name: string;
  id: number;
};