import { skills } from '@/lib/data';

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">Skills</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([title, list]) => (
          <section key={title} className="rounded-mdx border border-black/5 bg-white p-6 shadow-card">
            <h2 className="font-semibold">{title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {list.map((skill) => <li key={skill}>• {skill}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
