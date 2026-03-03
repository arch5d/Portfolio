export default function ContactPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="text-muted">Open to internship opportunities.</p>
      <ul className="space-y-3 rounded-mdx border border-black/5 bg-white p-6 shadow-card">
        <li>Email: <a className="text-accent" href="mailto:architadayal05@gmail.com">architadayal05@gmail.com</a></li>
        <li>GitHub: <a className="text-accent" href="https://github.com/arch5d">github.com/arch5d</a></li>
        <li>LinkedIn: <span className="text-muted">(placeholder)</span></li>
        <li>Twitter/X: <span className="text-muted">(placeholder)</span></li>
        <li>Instagram: <a className="text-accent" href="https://instagram.com/_maenka">@_maenka</a></li>
      </ul>
    </div>
  );
}
