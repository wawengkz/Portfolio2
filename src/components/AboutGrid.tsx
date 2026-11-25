import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, GraduationCap, Medal } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Marks come from public/icons/tech (any square SVG/PNG in public/).
 */

type Mark = { src: string; name: string }
const m = (name: string, slug: string): Mark => ({ name, src: `/icons/tech/${slug}.svg` })

type Capability = {
  index: string
  title: string
  marks: Mark[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Full-stack web apps', marks: [m('Ruby on Rails', 'rubyonrails'), m('React', 'react'), m('Node.js', 'nodedotjs')] },
  { index: '02', title: 'Mobile apps', marks: [m('React Native', 'react'), m('Expo', 'expo'), m('Kotlin', 'kotlin'), m('Android', 'android')] },
  { index: '03', title: 'APIs and databases', marks: [m('Django', 'django'), m('Express', 'express'), m('PostgreSQL', 'postgresql'), m('MongoDB', 'mongodb')] },
  { index: '04', title: 'CI/CD and DevOps', marks: [m('Docker', 'docker'), m('GitHub Actions', 'githubactions'), m('Nginx', 'nginx')] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Full-stack developer in Calamba, Laguna.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I’ve been into computers since I was a kid.
            <span> This is my passion, not just a career.</span>
          </p>

          <p className="agrid__note">
            I work across <strong>Ruby on Rails, React and Node.js</strong> and have shipped
            complete systems solo and on teams, from{' '}
            <a className="agrid__link" href="https://github.com/wawengkz" target="_blank" rel="noopener noreferrer">
              CI/CD pipelines
            </a>{' '}
            with Docker and GitHub Actions to a mobile and web platform built from scratch for my capstone.
            Clean code, sound architecture, practical solutions.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <GraduationCap size={18} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">B.S. Information Technology</span>
                <span className="agrid__cell-meta">Mapua Malayan Colleges Laguna</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Based in the Philippines</span>
              </span>
            </span>

            <Link className="agrid__cell agrid__cell--wide" to="/certificates">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <Medal size={18} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">7 certificates</span>
                <span className="agrid__cell-meta">Google, Vanderbilt, Illinois Tech</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src="/about/portrait.jpg"
            alt="Portrait of Lhenard Trinidad"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
