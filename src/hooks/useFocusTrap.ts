import { useEffect, type RefObject } from 'react'

/** Keeps Tab / Shift+Tab inside `ref` while `active`, and makes the rest of
 *  the page inert so assistive tech cannot wander behind a modal dialog. */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active = true) {
  useEffect(() => {
    const root = ref.current
    if (!root || !active) return
    const siblings = Array.from(document.body.children).filter(
      (el) => el !== root && !el.hasAttribute('inert'),
    )
    siblings.forEach((el) => el.setAttribute('inert', ''))
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const items = root.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),video[controls],[tabindex]:not([tabindex="-1"])',
      )
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      const cur = document.activeElement
      if (e.shiftKey && (cur === first || !root.contains(cur))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (cur === last || !root.contains(cur))) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      siblings.forEach((el) => el.removeAttribute('inert'))
    }
  }, [ref, active])
}
