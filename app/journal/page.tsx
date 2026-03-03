import Link from 'next/link';
import { getPostsMeta } from '@/lib/journal';

export default function JournalPage() {
  const posts = getPostsMeta();

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="text-4xl font-semibold">Journal</h1>
      <p className="text-muted">Short technical writing on architecture, security choices, and multidisciplinary building.</p>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/journal/${post.slug}`} className="block rounded-mdx border border-black/5 bg-white p-6 shadow-card">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="rounded-full bg-[#E6FFFB] px-2 py-1 text-[#0b7f7d]">{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
