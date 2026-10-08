import Image from 'next/image'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 md:px-12 lg:px-16 h-16">
        <a href="#top" className="flex items-center gap-3" aria-label="Cahyo Ledda, back to top">
          <Image
            src="/brand/icon-dark-128.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="hidden sm:inline font-semibold tracking-[0.15em] text-foreground">
            CAHYO LEDDA
          </span>
        </a>

        <nav className="flex items-center gap-4 md:gap-8 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
