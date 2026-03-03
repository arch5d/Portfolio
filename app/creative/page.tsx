export default function CreativePage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-4xl font-semibold">Creative</h1>
      <section className="rounded-mdx border border-black/5 bg-white p-6 shadow-card">
        <h2 className="text-xl font-semibold">Vocalist & Composer</h2>
        <p className="mt-2 text-muted">Music is my creative counterpart to systems thinking. I write poetries and compose songs.</p>
      </section>
      <section className="rounded-mdx border border-black/5 bg-white p-6 shadow-card">
        <h2 className="text-xl font-semibold">Instruments</h2>
        <p className="mt-2 text-muted">Guitar · Ukulele · Piano · Mouth Organ</p>
      </section>
      <section className="rounded-mdx border border-black/5 bg-white p-6 shadow-card">
        <h2 className="text-xl font-semibold">Maenka</h2>
        <p className="mt-2 text-muted">A brand for the minimal and elegant handbags and accessories.</p>
      </section>
      <section className="rounded-mdx border border-black/5 bg-white p-6 shadow-card">
        <h2 className="text-xl font-semibold">Links</h2>
        <div className="mt-2 flex flex-col gap-2 text-accent">
          <a href="https://www.bandlab.com/" target="_blank">BandLab: architamt@bndlb.com</a>
          <a href="https://soundtrap.com/" target="_blank">Soundtrap: architamt@soundtrap.com</a>
          <a href="https://instagram.com/architadayal" target="_blank">Instagram (personal): @architadayal</a>
          <a href="https://instagram.com/_maenka" target="_blank">Maenka: @_maenka</a>
        </div>
      </section>
    </div>
  );
}
