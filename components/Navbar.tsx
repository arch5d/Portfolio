import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Projects', '/projects'],
  ['Skills', '/skills'],
  ['Journal', '/journal'],
  ['About', '/about'],
  ['Creative', '/creative'],
  ['Contact', '/contact']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">Archita Dayal</Link>
        <div className="hidden gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-muted transition hover:text-accent">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
