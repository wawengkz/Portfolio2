import { GraduationCap, MapPin } from '@/components/slab'
import { experience, education } from '@/data/experience'
import { stackGroups, techByName, techIcon } from '@/data/stack'

/**
 * Experience: a timeline of the three roles, the degree, and the full tech
 * stack grouped the way it is used. Scrolls like the template's Services page.
 */
export default function ExperienceGrid() {
  return (
    <section className="pgrid xpgrid" aria-labelledby="xp-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="xp-title">
          From IT support to full-stack.
        </h1>
        <p className="pgrid__lede">
          Since 2022 across software, networks and Web3, alongside a B.S. in IT (Software Development).
        </p>
      </header>

      <div className="home__glass xpgrid__glass">
        <ol className="xp" role="list">
          {experience.map((r) => (
            <li key={r.role + r.org} className={`xp__item${r.current ? ' is-current' : ''}`}>
              <span className="xp__dot" aria-hidden="true" />
              <div className="bento__card xp__card">
                <div className="xp__top">
                  <h2 className="xp__role">{r.role}</h2>
                  <span className="xp__dates">{r.dates}</span>
                </div>
                <p className="xp__org">
                  {r.org}
                  {r.place && <span aria-hidden="true"> · </span>}
                  {r.place && (
                    <span className="xp__place">
                      <MapPin size={12} weight="fill" aria-hidden="true" /> {r.place}
                    </span>
                  )}
                  {r.current && <span className="xp__badge">Latest</span>}
                </p>
                <ul className="xp__points" role="list">
                  {r.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="pjd__tech">
                  {r.tech.map((n) => {
                    const t = techByName(n)
                    return (
                      <span key={n} className="pj__chip">
                        {t && <img src={techIcon(t.slug)} alt="" width={14} height={14} loading="lazy" decoding="async" />}
                        {n}
                      </span>
                    )
                  })}
                </div>
              </div>
            </li>
          ))}
          <li className="xp__item">
            <span className="xp__dot xp__dot--edu" aria-hidden="true" />
            <div className="bento__card xp__card">
              <div className="xp__top">
                <h2 className="xp__role">
                  <GraduationCap size={18} weight="fill" aria-hidden="true" className="xp__cap" />
                  {education.degree}
                </h2>
              </div>
              <p className="xp__org">
                {education.school}
                <span aria-hidden="true"> · </span>
                {education.track}
              </p>
              <p className="xp__course">Coursework: {education.coursework.join(', ')}</p>
            </div>
          </li>
        </ol>

        <aside className="xps" aria-labelledby="stack-title">
          <h2 className="xps__title" id="stack-title">
            Tech stack
          </h2>
          {stackGroups.map((g) => (
            <div key={g.label} className="xps__group">
              <h3 className="xps__label">{g.label}</h3>
              <ul className="xps__chips" role="list">
                {g.items.map((t) => (
                  <li key={t.name} className="pj__chip">
                    <img src={techIcon(t.slug)} alt="" width={14} height={14} loading="lazy" decoding="async" />
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
