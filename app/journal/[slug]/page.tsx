import { notFound } from 'next/navigation';
import { getPostSource, getPostsMeta } from '@/lib/journal';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export function generateStaticParams() {
  return getPostsMeta().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const { content, data } = getPostSource(params.slug);
    const mdx = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeHighlight] }
      }
    });

    return (
      <article className="mx-auto max-w-3xl space-y-6">
        <p className="text-sm text-muted">{data.date} · {data.readingTime}</p>
        <h1 className="text-4xl font-semibold">{data.title as string}</h1>
        <p className="text-muted">{data.description as string}</p>
        <div className="prose prose-neutral max-w-none leading-8">{mdx.content}</div>
      </article>
    );
  } catch {
    notFound();
  }
}
