'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  image: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Powerhouse Integrated BIM Model',
    category: 'BIM & 3D Modeling',
    description:
      'Integrated Revit model of a hydropower powerhouse combining isolated footings, steel frame, CHB envelope, doors, windows, and roof into a single coordinated model.',
    tags: ['Revit', 'BIM', 'Hydropower'],
    image: '/projects/1791429498541_image.jpg',
  },
  {
    id: 2,
    title: 'Powerhouse Structural Frame',
    category: 'BIM & 3D Modeling',
    description:
      '3D structural frame of the powerhouse in AutoCAD showing footings, column reinforcement, wall framing, and roof trusses, used as the basis for the Revit model.',
    tags: ['AutoCAD 3D', 'Structural Modeling', '2D-to-3D'],
    image: '/projects/1791429523214_image.jpg',
  },
  {
    id: 3,
    title: 'Turbine-Generator Unit Layout',
    category: 'BIM & 3D Modeling',
    description:
      'Wireframe 3D layout of twin turbine-generator units inside the powerhouse, coordinating equipment placement with the surrounding civil structure.',
    tags: ['AutoCAD 3D', 'Equipment Layout', 'Coordination'],
    image: '/projects/1791429508216_image.jpg',
  },
  {
    id: 4,
    title: 'Suspension Footbridge Model',
    category: 'BIM & 3D Modeling',
    description:
      'Revit 3D model of a pedestrian suspension bridge with towers, main cables, hangers, and deck spanning between two terrain abutments.',
    tags: ['Revit', '3D Modeling', 'Bridge'],
    image: '/projects/1791429493373_image.jpg',
  },
  {
    id: 5,
    title: 'Suspension Footbridge Rendering',
    category: 'BIM & 3D Modeling',
    description:
      'Photorealistic Revit rendering of the suspension footbridge for client presentation, with exterior sun lighting and sky background.',
    tags: ['Revit', 'Rendering', 'Visualization'],
    image: '/projects/1791429504242_image.jpg',
  },
  {
    id: 6,
    title: 'Sluice Way Gate 3D Perspective',
    category: 'BIM & 3D Modeling',
    description:
      '3D perspective sheet of the sluice way gate structure for the 6,000 kW Binalbagan 1 Mini Hydro Project, including the gate frame, channel, and energy dissipators.',
    tags: ['3D Modeling', 'Hydraulic Structures', 'Hydropower'],
    image: '/projects/SLUICE_WAY_GATE_PERSPECTIVE-3dmodel-1.jpg',
  },
  {
    id: 7,
    title: 'Headrace Profile',
    category: 'Civil & Terrain',
    description:
      'Civil 3D profile view of the headrace alignment from Sta. 1+505 to 3+420, used to check grades and elevations along the waterway.',
    tags: ['Civil 3D', 'Profile Views', 'Alignments'],
    image: '/projects/1791430688379_image.jpg',
  },
  {
    id: 8,
    title: 'Terrain Surface Model to Surge Tank',
    category: 'Civil & Terrain',
    description:
      'Point-based TIN surface built from survey data for the stretch from Sta. 1+505 to the surge tank, used to generate penstock and headrace profiles.',
    tags: ['Civil 3D', 'Surface Modeling', 'Point-Based Surfaces'],
    image: '/projects/clipboard_paste_1790932405218.jpg',
  },
  {
    id: 9,
    title: 'Right-of-Way Lot Plan',
    category: 'Civil & Terrain',
    description:
      'Lot plan for the Binalbagan 1 power line route, identifying affected lots, owner parcels, electrical post locations, and affected areas in square meters.',
    tags: ['AutoCAD', 'Site Plan', 'Right-of-Way'],
    image: '/projects/Roy_Galvan_Perimiter-1.jpg',
  },
  {
    id: 10,
    title: 'Reinforced Concrete Pipe Culvert',
    category: 'Structural Drawings',
    description:
      'Front, right, and isometric elevations of a Ø1600 mm RCPC with spiral and closed-tie reinforcement details for the 1,820 kW Binulug Mini Hydro Project.',
    tags: ['AutoCAD', 'Reinforcement Detailing', 'RCPC'],
    image: '/projects/Reinforced_Concrete_Pipe_Culvert-1.jpg',
  },
  {
    id: 11,
    title: 'RCPC Pipe Collar',
    category: 'Structural Drawings',
    description:
      'Pipe collar elevations with Ø12 mm closed ties and Ø10 mm C-ties, plus a full 3D assembly of the collared culvert run and manhole.',
    tags: ['AutoCAD', 'Structural Detailing', '3D Assembly'],
    image: '/projects/Reinforced_Concrete_Pipe_Culvert-3.jpg',
  },
  {
    id: 12,
    title: 'RCPC Manhole — Binulug',
    category: 'Structural Drawings',
    description:
      'Manhole front and transverse elevations with rebar layout, a 3D model of the manhole body, and reinforced cover slab details.',
    tags: ['AutoCAD', 'Rebar Detailing', 'Manhole'],
    image: '/projects/Reinforced_Concrete_Pipe_Culvert-2.jpg',
  },
  {
    id: 13,
    title: 'RCPC Manhole — Binalbagan 1',
    category: 'Structural Drawings',
    description:
      'Adapted manhole drawing set for the 6,000 kW Binalbagan 1 Mini Hydro Project, reusing standardized details and template blocks across projects.',
    tags: ['AutoCAD', 'Template Libraries', 'Manhole'],
    image: '/projects/Reinforced_Concrete_Pipe_Culvert-Manhole-1.jpg',
  },
  {
    id: 14,
    title: 'Trashrack 1 Weir Intake Model',
    category: 'Steel Fabrication',
    description:
      '3D model of a 3000 × 6000 mm steel trashrack for the weir intake, with flat bars and L65 × 65 built-up horizontal stiffeners.',
    tags: ['AutoCAD 3D', 'Steel', 'Weir Intake'],
    image: '/projects/Trashrack_both_intake_and_outside_trashrack-1.jpg',
  },
  {
    id: 15,
    title: 'Trashrack 1 Joint Details',
    category: 'Steel Fabrication',
    description:
      'Fabrication sheet for Trashrack 1 showing top and side joints, C-shape and angle-bar members, flat bar spacing, and full-weld callouts.',
    tags: ['AutoCAD', 'Steel Detailing', 'Welding Symbols'],
    image: '/projects/Trashrack_both_intake_and_outside_trashrack-2.jpg',
  },
  {
    id: 16,
    title: 'Trashrack 2 Joint Details',
    category: 'Steel Fabrication',
    description:
      'Joint details for the inclined Trashrack 2, covering upper and middle-to-bottom frame connections with rendered 3D callouts.',
    tags: ['AutoCAD', 'Steel Detailing', '3D Details'],
    image: '/projects/Trashrack_both_intake_and_outside_trashrack-3.jpg',
  },
  {
    id: 17,
    title: 'Trashrack 2 Weir Intake Model',
    category: 'Steel Fabrication',
    description:
      '3D model of the inclined 3000 × 6000 mm Trashrack 2 for the Binalbagan 1 weir intake.',
    tags: ['AutoCAD 3D', 'Steel', 'Weir Intake'],
    image: '/projects/Trashrack_both_intake_and_outside_trashrack-4.jpg',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))]
  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  const openProject = openIndex === null ? null : filteredProjects[openIndex]

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null
          ? i
          : (i + delta + filteredProjects.length) % filteredProjects.length
      ),
    [filteredProjects.length]
  )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, close, step])

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-16 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Drafting and modeling work for mini hydropower projects: BIM models,
            terrain and alignment profiles, reinforced concrete details, and steel
            fabrication drawings. Click any project to view the full sheet.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-foreground text-primary'
                  : 'bg-card text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group text-left cursor-pointer overflow-hidden rounded-lg bg-card hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-accent text-sm font-semibold mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openProject.title}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 p-4 md:p-8"
          onClick={close}
        >
          <div className="flex items-start justify-between gap-4 mb-4 text-foreground">
            <div>
              <p className="text-accent text-sm font-semibold">
                {openProject.category}
              </p>
              <h3 className="text-lg md:text-2xl font-bold">{openProject.title}</h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="px-3 py-1 text-2xl leading-none rounded hover:bg-card"
            >
              ×
            </button>
          </div>

          <div className="relative flex-1 min-h-0">
            <Image
              src={openProject.image}
              alt={openProject.title}
              fill
              sizes="100vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="flex items-center justify-between gap-4 mt-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              className="px-4 py-2 rounded bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              ← Prev
            </button>
            <p className="text-muted-foreground text-sm hidden md:block max-w-3xl text-center">
              {openProject.description}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              className="px-4 py-2 rounded bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
