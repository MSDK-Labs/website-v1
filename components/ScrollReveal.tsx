'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.visible)'))
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => observer.observe(el))

    // Resilience fallback: never leave content permanently hidden if the
    // observer cannot fire (no-scroll views, full-page captures, edge cases).
    const fallback = window.setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => el.classList.add('visible'))
    }, 900)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [pathname])

  return null
}
