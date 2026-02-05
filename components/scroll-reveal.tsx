'use client'

import React from "react"

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animationClass = {
            up: 'reveal',
            left: 'reveal-left',
            right: 'reveal-right',
          }[direction]

          ref.current?.classList.add(animationClass)
          ref.current?.style.setProperty('--reveal-delay', `${delay}s`)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        animation: `var(--reveal-animation, fadeInUp) 0.6s ease-out ${delay}s forwards`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
