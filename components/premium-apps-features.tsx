'use client'

import { useEffect, useRef, useState } from 'react'

const FEATURES = [
  {
    icon: '⚡',
    title: 'Aktivasi Cepat',
    description: 'Pesanan diproses secepat mungkin.',
  },
  {
    icon: '🛡',
    title: 'Bergaransi',
    description: 'Mendapat garansi sesuai ketentuan.',
  },
  {
    icon: '💰',
    title: 'Harga Terjangkau',
    description: 'Harga bersahabat untuk semua kalangan.',
  },
  {
    icon: '📱',
    title: 'Banyak Pilihan',
    description: 'Tersedia berbagai aplikasi premium sesuai kebutuhan.',
  },
]

export function PremiumAppsFeatures() {
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
      className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Grid 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : '0ms',
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/10 to-transparent -z-10 blur-xl" />

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
