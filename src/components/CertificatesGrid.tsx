import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, Medal } from '@/components/slab'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { certificates, type Certificate } from '@/data/certificates'

/**
 * Certificates: a grid of the seven Coursera courses. Certificates with an
 * image open large in a dialog; the one without gets a designed card and
 * links straight to its share page.
 */

function CertDialog({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  useFocusTrap(dialogRef)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      ref={dialogRef}
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">
        <figure className="cert-dialog">
          <img src={cert.image} alt={`Certificate: ${cert.title}`} />
          <figcaption>
            <span>
              <b>{cert.title}</b>
              <i>
                {cert.issuer} · {cert.date}
              </i>
            </span>
            <a className="pjd__link" href={cert.href} target="_blank" rel="noopener noreferrer">
              Verify on Coursera
              <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </figcaption>
        </figure>
      </div>
    </div>,
    document.body,
  )
}

export default function CertificatesGrid() {
  const [open, setOpen] = useState<Certificate | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid certgrid" aria-labelledby="cert-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Certificates</span>
        <h1 className="pgrid__title" id="cert-title">
          Always learning.
        </h1>
        <p className="pgrid__lede">
          Seven Coursera courses from Google, Vanderbilt University and Illinois Tech, all completed in 2026.
        </p>
      </header>

      <div className="home__glass certgrid__glass">
        <ul className="certgrid__list" role="list">
          {certificates.map((c) => {
            const body = (
              <>
                <span className="cert__thumb" style={{ ['--accent' as string]: c.accent }}>
                  {c.image ? (
                    <img src={c.image} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <span className="cert__plate">
                      <Medal size={28} weight="fill" aria-hidden="true" />
                      <b>{c.issuer}</b>
                      <i>Course completion</i>
                    </span>
                  )}
                </span>
                <span className="cert__text">
                  <span className="cert__title">{c.title}</span>
                  <span className="cert__meta">
                    {c.issuer} · {c.date}
                  </span>
                  <span className="pjd__tech">
                    {c.tags.map((t) => (
                      <span key={t} className="pj__chip">
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
              </>
            )
            return (
              <li key={c.id}>
                {c.image ? (
                  <button
                    type="button"
                    className="bento__card bento__card--btn cert"
                    aria-haspopup="dialog"
                    onClick={(e) => {
                      triggerRef.current = e.currentTarget
                      setOpen(c)
                    }}
                  >
                    {body}
                  </button>
                ) : (
                  <a className="bento__card cert" href={c.href} target="_blank" rel="noopener noreferrer">
                    {body}
                    <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {open && <CertDialog cert={open} onClose={close} />}
    </section>
  )
}
