/**
 * Identity for Lhenard Trinidad. Everything that says who he is lives here:
 * name, handle, photo, socials, email and the Home headline.
 */

import { Briefcase, MapPin, GraduationCap, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  phone: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Lhenard Trinidad',
  firstName: 'Lhenard',
  handle: '@wawengkz',
  role: 'Full-Stack Developer',
  avatarSrc: '/avatar.jpg',
  verifiedLabel: 'B.S. Information Technology, Mapua Malayan Colleges Laguna',
  email: 'trinidadlhenard10@gmail.com',
  phone: '09673184039',
  location: 'Calamba, Laguna, PH',
  stats: [
    { value: 'Since 2022', label: 'In software and IT', Icon: Briefcase },
    { value: 'B.S. IT', label: 'Mapua Malayan', Icon: GraduationCap },
    { value: 'Laguna', label: 'Calamba, PH', Icon: MapPin },
  ],
  // The intro types this line, then flies it into the Home headline.
  displayName: { line1: 'Full-stack developer.', line2: 'Clean code.' },
  hero: {
    body:
      'I build complete systems with Ruby on Rails, React and Node.js, from CI/CD pipelines to mobile and web platforms.',
    portraitSrc: '/avatar.jpg',
    portraitAlt: 'Portrait of Lhenard Trinidad',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/wawengkz', iconPath: '/icons/github.svg' },
    { label: 'LinkedIn profile', href: 'https://linkedin.com/in/lhenard-trinidad', iconPath: '/icons/linkedin.svg' },
    { label: 'Email Lhenard', href: 'mailto:trinidadlhenard10@gmail.com', iconPath: '/icons/gmail.svg' },
  ],
}
