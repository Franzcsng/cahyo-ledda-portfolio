const EXPERIENCE = [
  {
    role: 'Draftsman / AutoCAD Operator',
    company: 'Almana Power Corporation',
    period: 'October 2025 – Present',
    points: [
      'Drafted and updated 2D structural plans and 3D models for 10+ hydropower infrastructure modules, maintaining strict engineering specifications.',
      'Developed custom AutoLISP scripts and CAD macros to automate repetitive drawing extractions and routine updates, speeding up plan modifications by 70%.',
      'Standardized dynamic blocks and template libraries, reducing initial layout drafting time by 35% across cross-disciplinary project files.',
      'Reviewed and audited 100+ Detailed Engineering Design (DED) drawings for technical compliance, cutting revision turnaround by 50% with 100% adherence to regulatory standards.',
    ],
  },
  {
    role: 'Supervised Internship Training 2 (AutoCAD Drafter 3D)',
    company: 'Tsukiden Electronics Philippines Inc.',
    period: 'January 2025 – May 2025',
    points: [
      'Produced 2D drawings and 3D models in AutoCAD for the New Product Introduction (NPI) CAD Engineering team and fabricated them through 3D printing.',
      'Designed custom PCB seaters (holding fixtures) used in production and PCB inspection, achieving a 95% fit rate.',
    ],
  },
  {
    role: 'Supervised Internship Training 1',
    company: 'Datasol Computer & CCTV Solution',
    period: 'July – August 2024',
    points: [
      'Repaired and troubleshot laptops, cellphones, and monitors, and provided device consultation and service assistance to clients.',
    ],
  },
]

const SKILLS = [
  {
    group: 'CAD & Drafting',
    items: ['AutoCAD', 'Civil 3D', 'Structural Drafting', '2D Detailing', 'Technical Documentation', 'Fusion 360 (learning)'],
  },
  {
    group: 'BIM & 3D Modeling',
    items: ['Revit', '3D Structural Modeling', '2D-to-3D Conversion', 'Architectural-Structural Integration'],
  },
  {
    group: 'Civil & Terrain Design',
    items: ['Surface Modeling', 'Alignments', 'Profile Views', 'Point-Based Surfaces'],
  },
  {
    group: 'Automation & File Formats',
    items: ['AutoLISP', 'CAD Macros', 'Workflow Automation', 'DWG', 'DXF', 'STEP'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left column - heading and navigation */}
        <div className="space-y-8 md:sticky md:top-24">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About</h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>

          <nav className="space-y-3 text-sm">
            <a
              href="#about"
              className="block text-accent hover:text-foreground transition-colors duration-300"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              CONTACT
            </a>
          </nav>
        </div>

        {/* Right column - about content */}
        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <div className="space-y-6">
            <p>
              I&apos;m a draftsman and AutoCAD operator with a background in
              Electronics Engineering Technology. I work on hydropower
              infrastructure: structural plans, 3D models, and cross-disciplinary
              schematics, with hands-on experience in terrain and penstock
              profiling and 2D-to-3D structural modeling.
            </p>

            <p>
              My main tools are AutoCAD, Civil 3D, and Revit, with DXF/STEP/DWG
              workflows between them. I also write AutoLISP scripts and build
              dynamic block and template libraries to take repetitive work out of
              drafting. I&apos;m currently learning Fusion 360 on my own.
            </p>

            <p>
              I&apos;m looking for remote, work-from-home CAD roles where I can
              deliver precise, well-coordinated drawings and help streamline
              drafting workflows.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            <ol className="space-y-8 border-l border-border pl-6">
              {EXPERIENCE.map((job) => (
                <li key={job.company} className="relative space-y-2">
                  <span className="absolute -left-[1.85rem] top-2 w-3 h-3 rounded-full bg-accent" />
                  <p className="text-xs uppercase tracking-wider text-accent">
                    {job.period}
                  </p>
                  <h4 className="text-lg font-semibold text-foreground">{job.role}</h4>
                  <p className="text-sm">{job.company}</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
            {SKILLS.map((skill) => (
              <div key={skill.group} className="space-y-2">
                <p className="text-sm font-semibold text-foreground">{skill.group}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certification */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
            <div className="space-y-1">
              <h4 className="text-lg font-semibold text-foreground">
                BSET Major in Electronics
              </h4>
              <p className="text-sm">
                Technological University of the Philippines – Visayas, Talisay City · 2021 – 2025
              </p>
              <p className="text-sm pt-2">
                <span className="text-foreground font-medium">Thesis:</span>{' '}
                Night-time Alert System for Motorcyclists (Team Leader &amp;
                Programmer). A motorcycle-mounted pedestrian detection prototype
                using an Arduino Mega 2560 and YDLIDAR X2 sensor, detecting
                objects up to 10 m within a 30° field, with a night-vision camera
                display and a custom-fabricated sensor bracket.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-semibold text-foreground">Certification</h4>
              <p className="text-sm">
                Negros Occidental Language &amp; Information Technology Center · 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
