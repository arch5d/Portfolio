import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content/journal');

export type PostMeta = {
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  slug: string;
};

export function getPostsMeta(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(source);
      return { ...(data as Omit<PostMeta, 'slug'>), slug: file.replace('.mdx', '') };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSource(slug: string) {
  const source = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), 'utf8');
  return matter(source);
}
