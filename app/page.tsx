import Link from 'next/link';
import Image from 'next/image';
import AnimateInView from '@/components/AnimateInView';
import Card from '@/components/ui/Card';
import { journalPosts, projects, skills, experiments } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="space-y-6 pt-8 md:flex md:items-center md:justify-between">
        <div className="space-y-6 md:w-1/2">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Creative Technologist · Archita Dayal</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            <span className="block">Curious about systems.</span>
            <span className="block">Serious about</span>
            <span className="block">building them.</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">Creative Technologist exploring AI, cybersecurity, web systems, and intelligent architectures. I build, experiment, and document what I learn.</p>
          <p className="text-sm text-muted">Currently open to internship opportunities.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-card transition hover:opacity-90">View Projects</Link>
            <Link href="/journal" className="rounded-md border border-black/10 bg-white px-5 py-2.5 text-sm font-medium">Read Journal</Link>
          </div>
        </div>
        <div className="relative md:w-1/2 flex justify-end">
          {/* drop your portrait image in public/hero-portrait.png */}
          <Image
            src="/meee.png"
            alt="Portrait of Archita"
            width={600}
            height={600}
            className="hero-portrait grayscale opacity-75 max-w-sm md:max-w-md"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <AnimateInView key={project.slug} delay={idx * 0.05}>
              <Card>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                {project.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#E6FFFB] px-3 py-1 text-xs text-[#0b7f7d]">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex gap-4 text-sm">
                  <a href={project.github} className="text-accent underline-offset-4 hover:underline">GitHub</a>
                  <Link href={`/projects#${project.slug}`} className="text-muted underline-offset-4 hover:underline">View Details</Link>
                </div>
              </Card>
            </AnimateInView>
          ))}
        </div>

        <h3 className="text-xl font-semibold pt-4">Ongoing Experiments</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {experiments.map((exp, idx) => (
            <AnimateInView key={exp.slug} delay={idx * 0.05}>
              <Card className="opacity-80">
                <h4 className="text-lg font-medium">{exp.title}</h4>
                <p className="mt-2 text-sm text-muted">{exp.description}</p>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills Snapshot</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, entries]) => (
            <div key={group} className="rounded-mdx border border-black/5 bg-white p-5 shadow-card">
              <h3 className="text-sm font-semibold">{group}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {entries.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Latest from Journal</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {journalPosts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="rounded-mdx border border-black/5 bg-white p-5 shadow-card transition hover:-translate-y-0.5">
              <p className="text-xs uppercase tracking-wide text-accent">{post.category}</p>
              <h3 className="mt-2 font-medium">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
