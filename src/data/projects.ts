export type ProjectLink = { label: string; href: string }

export type Project = {
  id: string
  title: string
  /** One line for the card. */
  blurb: string
  /** Full description in the dialog. */
  description: string
  tech: string[]
  /** Card cover + first gallery frame. Omit for a designed glyph tile. */
  cover?: string
  /** Where the cover is anchored inside the card. */
  coverPosition?: string
  /** 'contain' for logos and phone screens on a light plate. */
  coverFit?: 'cover' | 'contain'
  images?: string[]
  video?: { src: string; poster: string }
  links: ProjectLink[]
  glyph?: string
  accent?: string
  /** Where the work came from, shown as the kicker. */
  kicker: string
}

const ff = (n: number, ext = 'png') => `/projects/familyflow/0${n}.${ext}`

export const projects: Project[] = [
  {
    id: 'pettapp',
    title: 'PetTapp',
    kicker: 'Mobile + web',
    blurb: 'Pet care platform with real-time booking, GPS tracking and GCash/Maya payments.',
    description:
      'Full-stack pet care platform with a React Native app and a React web app, dual registration for owners and businesses, real-time booking, GPS tracking, and GCash/Maya payments.',
    tech: ['React Native', 'React', 'Node.js', 'MongoDB'],
    cover: '/projects/pettapp/01.jpg',
    coverPosition: 'left top',
    links: [{ label: 'Visit site', href: 'https://pettapp-seven.vercel.app/' }],
  },
  {
    id: 'technavyphil',
    title: 'TechNavyPhil',
    kicker: 'Internship',
    blurb: 'Rails and PostgreSQL features for a live platform, plus performance tuning.',
    description:
      'Full-stack features built with Ruby on Rails and PostgreSQL for core platform functionality, with frontend and backend performance optimizations that cut page load times through query tuning.',
    tech: ['Ruby on Rails', 'PostgreSQL'],
    cover: '/projects/technavyphil/01.jpg',
    links: [{ label: 'Visit site', href: 'https://technavyphil.com/home' }],
  },
  {
    id: 'blopworld',
    title: 'BLOP World',
    kicker: 'Web3',
    blurb: 'Community site for the AlgOctopus and BLOP NFT ecosystem on Algorand.',
    description:
      'Web3 work from my time at AlgOctopus: the community site for the AlgOctopus and BLOP NFT ecosystem on Algorand, alongside the trait-combination and rarity-distribution engine that generated 2,600 unique NFT images.',
    tech: ['Algorand', 'JavaScript'],
    cover: '/projects/blopworld/01.jpg',
    coverPosition: 'left top',
    links: [{ label: 'Visit site', href: 'https://blop.world/' }],
  },
  {
    id: 'familyflow',
    title: 'FamilyFlow',
    kicker: 'Mobile',
    blurb: 'Native Android app for household tasks, chat, calendar and budgets.',
    description:
      'A native Android app built with Kotlin for household task management. Families sign in with a household PIN, split chores across members, and personalize their home screen with a drag-and-drop layout. Includes real-time chat with search, an event calendar, and budget tracking, built with Agile/Scrum sprints and full test-case coverage across auth, UI, navigation, and chat.',
    tech: ['Kotlin', 'Android', 'Gradle'],
    cover: ff(1, 'jpg'),
    coverFit: 'contain',
    images: [ff(1, 'jpg'), ff(2), ff(3), ff(4), ff(5), ff(6), ff(7), ff(8), ff(9)],
    links: [{ label: 'GitHub', href: 'https://github.com/wawengkz' }],
  },
  {
    id: 'brainbytes',
    title: 'BrainBytes AI',
    kicker: 'DevOps',
    blurb: 'AI tutoring platform with six GitHub Actions workflows and Docker deploys.',
    description:
      'An AI tutoring platform deployed with a full CI/CD pipeline: 6 automated GitHub Actions workflows covering build, CI, deploy, quality, and security. Docker containerization runs across test, staging, and production with docker-compose, backed by MongoDB, a Node.js backend, and an Nginx reverse proxy with SSL. DevSecOps practices include multi-tool scanning with Snyk, Trivy, OSV Scanner, and npm audit, automated E2E testing, and matrix testing across Node.js 18.x and 20.x.',
    tech: ['Node.js', 'Docker', 'GitHub Actions', 'MongoDB', 'Nginx'],
    cover: '/projects/brainbytes/01.jpg',
    coverPosition: 'top center',
    images: [1, 2, 3, 4].map((n) => `/projects/brainbytes/0${n}.jpg`),
    links: [{ label: 'GitHub', href: 'https://github.com/wawengkz' }],
  },
  {
    id: 'connectly',
    title: 'Connectly',
    kicker: 'Backend API',
    blurb: 'Social media REST API with token auth and Factory/Singleton patterns.',
    description:
      'A RESTful API for a social media platform, built with Django and Django REST Framework. Implements token-based authentication and authorization for secure user access and post management, with CRUD operations built using Factory and Singleton design patterns, HTTPS/SSL security, and comprehensive API testing.',
    tech: ['Python', 'Django', 'SQL'],
    cover: '/projects/connectly/01.jpg',
    video: { src: '/video/connectly.mp4', poster: '/projects/connectly/01.jpg' },
    links: [{ label: 'GitHub', href: 'https://github.com/wawengkz' }],
  },
  {
    id: 'motorph',
    title: 'MotorPH Payroll',
    kicker: 'Enterprise app',
    blurb: 'Java payroll system with role-based access, attendance and leave.',
    description:
      'An enterprise-grade payroll system in Java with role-based access control, automated salary calculations, time tracking, attendance, and leave management.',
    tech: ['Java', 'SQL'],
    glyph: 'MP',
    accent: 'linear-gradient(135deg,#8a5a1e,#d19a4e)',
    links: [{ label: 'GitHub', href: 'https://github.com/wawengkz' }],
  },
  {
    id: 'chowgarage',
    title: 'ChowGarage',
    kicker: 'Front-end',
    blurb: 'Responsive restaurant site built from Figma wireframes to deployment.',
    description:
      'A fully responsive restaurant website built from Figma wireframes through deployment, integrating the Google Maps API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    cover: '/projects/chowgarage/01.jpg',
    coverPosition: 'top center',
    links: [{ label: 'Visit site', href: 'https://yenniecodes.github.io/ChowGarage/' }],
  },
]
