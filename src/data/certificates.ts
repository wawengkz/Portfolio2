export type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  image?: string
  href: string
  tags: string[]
  /** Brand tint for the designed card when there is no certificate image. */
  accent: string
}

export const certificates: Certificate[] = [
  {
    id: 'google-initiation',
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google',
    date: 'Mar 2026',
    image: '/certs/google-project-initiation.jpg',
    href: 'https://coursera.org/share/4523b0b82d94fb523c875f4886287188',
    tags: ['Project Charters', 'Stakeholder Analysis'],
    accent: '#1a73e8',
  },
  {
    id: 'vanderbilt-chatgpt',
    title: 'ChatGPT for Project Management: Execution, Tracking, Success',
    issuer: 'Vanderbilt University',
    date: 'Mar 2026',
    image: '/certs/vanderbilt-chatgpt-pm.jpg',
    href: 'https://coursera.org/share/d46556c900c4288be2f38863553ef2d5',
    tags: ['ChatGPT', 'Generative AI', 'Prompt Engineering'],
    accent: '#8a6d1d',
  },
  {
    id: 'google-execution',
    title: 'Project Execution: Running the Project',
    issuer: 'Google',
    date: '2026',
    href: 'https://coursera.org/share/ecbeb3cbc9431b0f989b3562f6139dfd',
    tags: ['Project Execution', 'Risk Management'],
    accent: '#1a73e8',
  },
  {
    id: 'hw-1',
    title: 'Hardware and Operating System Foundations I',
    issuer: 'Illinois Tech',
    date: 'Mar 30, 2026',
    image: '/certs/hardware-os-1.jpg',
    href: 'https://coursera.org/verify/0OCHBI2M4TAA',
    tags: ['Hardware', 'Operating Systems'],
    accent: '#cc0000',
  },
  {
    id: 'hw-2',
    title: 'Hardware and Operating System Foundations II',
    issuer: 'Illinois Tech',
    date: 'Mar 30, 2026',
    image: '/certs/hardware-os-2.jpg',
    href: 'https://coursera.org/verify/OQ85HFRZU4N0',
    tags: ['Hardware', 'Operating Systems'],
    accent: '#cc0000',
  },
  {
    id: 'hw-3',
    title: 'Hardware and Operating System Foundations III',
    issuer: 'Illinois Tech',
    date: 'Mar 30, 2026',
    image: '/certs/hardware-os-3.jpg',
    href: 'https://coursera.org/verify/P4IU69XZGFH0',
    tags: ['Hardware', 'Operating Systems'],
    accent: '#cc0000',
  },
  {
    id: 'hw-capstone',
    title: 'Hardware and OS Foundations Capstone',
    issuer: 'Illinois Tech',
    date: 'Mar 30, 2026',
    image: '/certs/hardware-os-4.jpg',
    href: 'https://coursera.org/verify/H7KA7WHMO6MR',
    tags: ['Hardware', 'Operating Systems'],
    accent: '#cc0000',
  },
]
