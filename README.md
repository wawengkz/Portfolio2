# Lhenard Trinidad - Portfolio

Full-stack developer portfolio: Vite, React 19, TypeScript, Three.js shader background.

Built from the `brewed-ops/portfolio-template` shell (MIT), filled with Lhenard's own content.

## Where the content lives

| What | File |
| --- | --- |
| Name, headline, socials, email | `src/data/profile.ts` |
| Projects (cards, galleries, video, links) | `src/data/projects.ts` |
| Roles and education | `src/data/experience.ts` |
| Certificates | `src/data/certificates.ts` |
| Tech stack and brand icons | `src/data/stack.ts`, `public/icons/tech/` |
| FAQs on the Contact page | `src/data/faqs.ts` |
| SEO and share tags | `index.html` |

## Run it

```bash
npm install
npm run dev      # local
npm run build    # production build in dist/
```

## Contact form

Without a backend the form opens the visitor's mail app addressed to the email in `profile.ts`.
To post to a form service instead, set `VITE_CONTACT_ENDPOINT` (see `src/lib/contact.ts`).

Brand icons are from [Simple Icons](https://simpleicons.org) (CC0). UI icons are [Phosphor](https://phosphoricons.com) (MIT).
