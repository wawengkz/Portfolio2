import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Code,
  GraduationCap,
  Briefcase,
  Medal,
  SealCheck,
} from '@/components/slab'
import { projects } from '@/data/projects'
import { experience } from '@/data/experience'
import { certificates } from '@/data/certificates'
import { allTech, techIcon } from '@/data/stack'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from the same records the views render in full. Every
 * card is a link. Motion is transform-only on a clipped inner track, so a card
 * never adds height and Home stays a single viewport.
 */

const PROJECT_SHOTS = projects.filter((p) => p.cover && p.coverFit !== 'contain').slice(0, 5)

// Three crops of the one portrait, fanned.
const PHOTOS = ['/about/fan-1.jpg', '/about/fan-2.jpg', '/about/fan-3.jpg']

const half = Math.ceil(allTech.length / 2)
const TOOL_ROWS = [allTech.slice(0, half), allTech.slice(half)]

const CERT_REEL = certificates.slice(0, 5)

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Eight builds: web, mobile, backend and DevOps." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((p, i) => (
              <span key={i} className="bento__shot">
                <img src={p.cover} alt="" loading="lazy" decoding="async" style={p.coverPosition ? { objectPosition: p.coverPosition } : undefined} />
              </span>
            ))}
          </div>
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Full-stack developer who loves computers." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      <Link to="/experience" className="bento__card bento__card--ai">
        <CardHead Icon={Code} title="Tech stack" desc="Rails, React, Node, Docker and more." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {TOOL_ROWS.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.name}-${i}`} className="bento__chip">
                    <img src={techIcon(n.slug)} alt="" width={15} height={15} />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={GraduationCap} title="Education" desc="Software Development, Mapua Malayan." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring lh-badge">
            <GraduationCap size={38} weight="duotone" />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            B.S. Information Technology
          </span>
        </div>
      </Link>

      <Link to="/experience" className="bento__card bento__card--services">
        <CardHead Icon={Briefcase} title="Experience" desc="Three roles, from IT support to Rails." />
        <ul className="bento__media bento__offers" role="list">
          {experience.map((r, i) => (
            <li key={r.role} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Briefcase size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{r.role}</span>
                <span className="bento__offer-note">{r.org}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      <Link to="/certificates" className="bento__card bento__card--quotes">
        <CardHead Icon={Medal} title="Certificates" desc="Google, Vanderbilt and Illinois Tech courses." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CERT_REEL, ...CERT_REEL].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Medal size={14} weight="fill" />
                  <b>{c.issuer}</b>
                </span>
                <span className="bento__review-role">{c.title}</span>
                <span className="bento__review-work">{c.date}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
