'use client'

import { useEffect, useRef, useState } from 'react'

export function PremiumAppsFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-20 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block p-6 rounded-lg border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              <span className="text-cyan-400 font-semibold">
                Tidak menemukan aplikasi yang diinginkan?
              </span>
              {' '}Jangan khawatir, NaierStore melayani request berbagai aplikasi premium. Silakan isi formulir di atas dan kami akan membantu mengecek ketersediaannya.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#premium-apps-form"
              onClick={(e) => {
                e.preventDefault()
                const formSection = document.getElementById('premium-apps-form')
                formSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-block px-6 py-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
            >
              ↑ Kembali ke Form
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
