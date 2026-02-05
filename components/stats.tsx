'use client'

import { ScrollReveal } from './scroll-reveal'

export function Stats() {
  const stats = [
    {
      number: '10K+',
      label: 'Pengguna Aktif',
      icon: '👥',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      number: '99.9%',
      label: 'Uptime Server',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '3',
      label: 'Platform Premium',
      icon: '🎮',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '24/7',
      label: 'Customer Support',
      icon: '🆘',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-r from-black via-slate-950 to-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className="flex"
            >
              <div className="w-full p-4 md:p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm card-hover hover:border-cyan-500/50 flex flex-col items-center justify-center text-center group overflow-hidden relative">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${stat.color} pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.number}
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
