import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <p className="max-w-2xl text-muted">Structured case studies across AI systems, security foundations, full-stack engineering, and blockchain experiments.</p>
      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.slug} id={project.slug} className="rounded-mdx border border-black/5 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-muted">{project.description}</p>
            <dl className="mt-4 grid gap-3 text-sm md:grid-cols-2">
              <div><dt className="font-semibold">Overview</dt><dd className="text-muted">{project.description}</dd></div>
              <div><dt className="font-semibold">Problem</dt><dd className="text-muted">{project.problem}</dd></div>
              <div><dt className="font-semibold">Approach</dt><dd className="text-muted">{project.approach}</dd></div>
              <div><dt className="font-semibold">Architecture summary</dt><dd className="text-muted">{project.architecture}</dd></div>
              <div className="md:col-span-2"><dt className="font-semibold">Key learnings</dt><dd className="text-muted">{project.learnings}</dd></div>
            </dl>
            <a href={project.github} className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline">GitHub link</a>
          </article>
        ))}
      </div>
    </div>
  );
}
