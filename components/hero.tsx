import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pt-24 pb-20"
    >
      <div className="space-y-6 max-w-2xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-card text-foreground border border-border">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Open to remote / work-from-home CAD roles
        </span>

        <div className="space-y-4">
          <h1>
            <span className="sr-only">Cahyo L. Ledda, CAD Operator and Drafter</span>
            <Image
              src="/brand/logo-full-light.png"
              alt=""
              width={1812}
              height={416}
              priority
              className="w-full max-w-xl h-auto"
            />
          </h1>
          <p className="text-sm text-muted-foreground">
            Talisay City, Negros Occidental, Philippines
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
          I produce structural plans, 3D models, and terrain profiles for
          hydropower infrastructure using AutoCAD, Civil 3D, and Revit, and I
          write AutoLISP scripts and template libraries that make drafting faster.
        </p>

        <div className="pt-6 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-accent hover:text-accent-foreground transition-colors duration-300 font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-accent-foreground transition-colors duration-300 font-medium"
          >
            Get In Touch
          </a>
          <a
            href="/CahyoLedda_Resume_102026.pdf"
            download="Cahyo_Ledda_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground rounded hover:bg-card transition-colors duration-300 font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
