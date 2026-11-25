export type Role = {
  role: string
  org: string
  place: string
  dates: string
  summary: string
  points: string[]
  tech: string[]
  current?: boolean
}

export const experience: Role[] = [
  {
    role: 'Full Stack Developer Intern',
    org: 'TechNavy PH',
    place: 'Remote',
    dates: 'Jan 2026 – May 2026',
    summary: 'Core platform features on Ruby on Rails and PostgreSQL.',
    points: [
      'Built full-stack features with Ruby on Rails and PostgreSQL for core platform functionality.',
      'Optimized frontend and backend performance, cutting page load times through query tuning.',
    ],
    tech: ['Ruby on Rails', 'PostgreSQL'],
    current: true,
  },
  {
    role: 'IT Support Specialist',
    org: 'Nextvas Inc.',
    place: 'Calamba, Laguna',
    dates: 'Jan 2025 – Jan 2026',
    summary: 'Hardware, networks, and internal tools.',
    points: [
      'Managed hardware support and MikroTik network infrastructure.',
      'Built a custom inventory system and an automated resume-checker tool that sped up HR screening.',
    ],
    tech: ['MikroTik'],
  },
  {
    role: 'Software Developer',
    org: 'AlgOctopus (NFT)',
    place: '',
    dates: 'Feb 2022 – Apr 2024',
    summary: 'Algorand NFT image generation.',
    points: [
      'Built an Algorand-based image randomizer for NFT generation, shipping 2,600 unique pieces.',
      'Included custom trait and rarity distribution logic.',
    ],
    tech: ['Algorand'],
  },
]

export const education = {
  degree: 'B.S. Information Technology',
  school: 'Mapua Malayan Colleges Laguna',
  track: 'Software Development',
  coursework: ['DevOps', 'Mobile Development', 'Data Structures'],
}
