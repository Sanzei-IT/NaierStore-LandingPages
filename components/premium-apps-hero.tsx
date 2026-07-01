'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export function PremiumAppsHero() {
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

  const handleScrollToForm = () => {
    const formSection = document.getElementById('premium-apps-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Judul */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">🔥 Aplikasi</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Premium
            </span>
          </h1>

          {/* Subjudul */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Nikmati berbagai aplikasi premium dengan harga terjangkau dan proses cepat. NaierStore melayani berbagai kebutuhan aplikasi premium untuk hiburan, produktivitas, desain, pendidikan, AI, streaming, dan masih banyak lagi.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: '✔', text: 'Fast Response' },
              { icon: '✔', text: 'Bergaransi' },
              { icon: '✔', text: 'Aman' },
              { icon: '✔', text: 'Proses Cepat' },
            ].map((badge, idx) => (
              <div
                key={idx}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 text-gray-200 text-sm transition-all duration-500 delay-${idx * 100} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <span className="text-cyan-400 font-bold">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleScrollToForm}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  )
}
