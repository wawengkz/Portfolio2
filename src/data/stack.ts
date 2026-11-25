/** The tech stack, grouped. `slug` is a file in public/icons/tech/. */
export type Tech = { name: string; slug: string; color: string }
export type TechGroup = { label: string; items: Tech[] }

const t = (name: string, slug: string, color: string): Tech => ({ name, slug, color })

export const stackGroups: TechGroup[] = [
  {
    label: 'Languages',
    items: [
      t('Python', 'python', '#3776AB'),
      t('JavaScript', 'javascript', '#F7DF1E'),
      t('TypeScript', 'typescript', '#3178C6'),
      t('Kotlin', 'kotlin', '#7F52FF'),
      t('Java', 'openjdk', '#EA2D2E'),
      t('HTML', 'html5', '#E34F26'),
      t('CSS', 'css3', '#1572B6'),
      t('SQL', 'mysql', '#4479A1'),
    ],
  },
  {
    label: 'Frameworks',
    items: [
      t('Ruby on Rails', 'rubyonrails', '#D30001'),
      t('React', 'react', '#61DAFB'),
      t('React Native', 'react', '#61DAFB'),
      t('Expo', 'expo', '#000020'),
      t('Node.js', 'nodedotjs', '#5FA04E'),
      t('Express', 'express', '#000000'),
      t('Django', 'django', '#092E20'),
    ],
  },
  {
    label: 'Databases',
    items: [
      t('PostgreSQL', 'postgresql', '#4169E1'),
      t('MongoDB', 'mongodb', '#47A248'),
      t('MySQL', 'mysql', '#4479A1'),
    ],
  },
  {
    label: 'DevOps & tools',
    items: [
      t('Docker', 'docker', '#2496ED'),
      t('GitHub Actions', 'githubactions', '#2088FF'),
      t('Nginx', 'nginx', '#009639'),
      t('Git', 'git', '#F05032'),
      t('Vercel', 'vercel', '#000000'),
      t('Render', 'render', '#000000'),
      t('Figma', 'figma', '#F24E1E'),
      t('Swagger', 'swagger', '#85EA2D'),
      t('MikroTik', 'mikrotik', '#293239'),
    ],
  },
]

export const allTech: Tech[] = (() => {
  const seen = new Set<string>()
  return stackGroups
    .flatMap((g) => g.items)
    .filter((i) => (seen.has(i.name) ? false : (seen.add(i.name), true)))
})()

export const techIcon = (slug: string) => `/icons/tech/${slug}.svg`

/** Lookup by display name, for project tag chips. */
export const techByName = (name: string) => allTech.find((x) => x.name.toLowerCase() === name.toLowerCase())
