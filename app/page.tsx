import Image from 'next/image'
import SiteHeader from '@/components/site-header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-16 bg-primary text-center text-muted-foreground text-sm">
        <a href="#top" aria-label="Back to top" className="inline-block mb-4">
          <Image
            src="/brand/icon-dark-128.png"
            alt=""
            width={40}
            height={40}
            className="rounded-lg"
          />
        </a>
        <p>
          © {new Date().getFullYear()} Cahyo L. Ledda. Draftsman &amp; AutoCAD Operator
          · Talisay City, Negros Occidental, Philippines.
        </p>
      </footer>
    </main>
  )
}
