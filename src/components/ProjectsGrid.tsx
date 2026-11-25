import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, CaretLeft, CaretRight, CursorClick, GithubLogo } from '@/components/slab'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { projects, type Project } from '@/data/projects'
import { techByName, techIcon } from '@/data/stack'

/**
 * Projects: eight cards in Home's bento language, each opening its work in a
 * dialog: a gallery (or the Connectly video), the full description, the stack
 * and the links. The dialog is a portal at z 8000, same as the template's.
 */

function TechChip({ name }: { name: string }) {
  const t = techByName(name)
  return (
    <span className="pj__chip">
      {t && <img src={techIcon(t.slug)} alt="" width={14} height={14} loading="lazy" decoding="async" />}
      {name}
    </span>
  )
}

function Cover({ p, large = false }: { p: Project; large?: boolean }) {
  if (!p.cover) {
    return (
      <span className="pj__glyph" style={{ background: p.accent }} aria-hidden="true">
        <b>{p.glyph}</b>
        {large && <i>{p.kicker}</i>}
      </span>
    )
  }
  return (
    <img
      className={`pj__img${p.coverFit === 'contain' ? ' pj__img--contain' : ''}`}
      src={p.cover}
      alt=""
      loading={large ? 'eager' : 'lazy'}
      decoding="async"
      style={p.coverPosition ? { objectPosition: p.coverPosition } : undefined}
    />
  )
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  useFocusTrap(dialogRef)
  const frames = project.images ?? (project.cover ? [project.cover] : [])
  const [idx, setIdx] = useState(0)
  const hasVideo = !!project.video
  const many = frames.length > 1

  const step = useCallback(
    (d: number) => setIdx((i) => (i + d + frames.length) % frames.length),
    [frames.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (many && !hasVideo && e.key === 'ArrowRight') step(1)
      if (many && !hasVideo && e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, many, hasVideo, step])

  const phoneShots = project.coverFit === 'contain'

  return createPortal(
    <div
      ref={dialogRef}
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">
        <article className="pjd">
          <div className="pjd__media">
            <div className={`pjd__view${phoneShots && idx > 0 ? ' pjd__view--phone' : ''}`}>
              {hasVideo ? (
                <video
                  src={project.video!.src}
                  poster={project.video!.poster}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} demo video`}
                />
              ) : frames.length > 0 ? (
                <img src={frames[idx]} alt={`${project.title} screenshot ${idx + 1} of ${frames.length}`} />
              ) : (
                <Cover p={project} large />
              )}
              {many && !hasVideo && (
                <>
                  <button type="button" className="pjd__nav pjd__nav--prev" onClick={() => step(-1)} aria-label="Previous image">
                    <CaretLeft size={18} weight="bold" />
                  </button>
                  <button type="button" className="pjd__nav pjd__nav--next" onClick={() => step(1)} aria-label="Next image">
                    <CaretRight size={18} weight="bold" />
                  </button>
                </>
              )}
            </div>
            {many && !hasVideo && (
              <ul className="pjd__thumbs" role="list">
                {frames.map((src, i) => (
                  <li key={src}>
                    <button
                      type="button"
                      className="pjd__thumb"
                      aria-label={`Show image ${i + 1}`}
                      aria-current={i === idx}
                      onClick={() => setIdx(i)}
                    >
                      <img src={src} alt="" loading="lazy" decoding="async" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pjd__body">
            <span className="pgrid__eyebrow">{project.kicker}</span>
            <h2 className="pjd__title">{project.title}</h2>
            <p className="pjd__desc">{project.description}</p>
            <div className="pjd__tech" aria-label="Built with">
              {project.tech.map((t) => (
                <TechChip key={t} name={t} />
              ))}
            </div>
            <div className="pjd__links">
              {project.links.map((l) => (
                <a key={l.href + l.label} className="pjd__link" href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label === 'GitHub' ? <GithubLogo size={16} weight="fill" aria-hidden="true" /> : null}
                  {l.label}
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>,
    document.body,
  )
}

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((p: Project, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(p)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid pjgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Things I’ve built and shipped.
        </h1>
        <p className="pgrid__lede">
          Web, mobile, backend and DevOps work from internships, a capstone and Web3. Open a card for screenshots,
          the stack and links.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects pjgrid__grid">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              className="bento__card bento__card--btn pjcard"
              data-id={p.id}
              onClick={(e) => show(p, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className={`pjcard__cover${p.coverFit === 'contain' ? ' pjcard__cover--plate' : ''}`}>
                <Cover p={p} />
              </span>
              <span className="pjcard__text">
                <span className="pjcard__kicker">{p.kicker}</span>
                <span className="pjcard__title">{p.title}</span>
                <span className="pjcard__blurb">{p.blurb}</span>
              </span>
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
            </button>
          ))}
        </div>
      </div>

      {open && <ProjectDialog project={open} onClose={close} />}
    </section>
  )
}
