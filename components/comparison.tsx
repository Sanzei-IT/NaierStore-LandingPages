'use client'

import { ScrollReveal } from './scroll-reveal'

export function Comparison() {
  const platforms = [
    {
      name: 'Nebula Cloud',
      icon: '🌌',
      pros: [
        'Koleksi game terbanyak',
        'Android, PC/Laptop, Smart TV, VR',
        'Cocok untuk eksplor banyak judul',
      ],
      cons: ['Tidak mendukung iOS'],
    },
    {
      name: 'Xbox Cloud',
      icon: '🎮',
      pros: [
        'Game AAA & eksklusif Xbox',
        'Android, iOS, PC, Laptop, MacBook, Smart TV, VR',
        'Semua game online',
      ],
      cons: ['Beberapa game harus dimiliki (owned)'],
    },
    {
      name: 'Luna Cloud',
      icon: '☀️',
      pros: [
        'Semua device termasuk iOS & Smart TV',
        'Harga lebih terjangkau',
        'Sistem channel fleksibel',
      ],
      cons: ['Koleksi game tidak sebanyak lainnya'],
    },
  ]

  return (
    <section id="comparison" className="relative py-20 md:py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Perbandingan Platform
            </span>
            <br />
            <span className="text-white">Cloud Gaming Eksklusif</span>
          </h2>
        </ScrollReveal>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((platform, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="flex">
              <div className="w-full rounded-xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-6 md:p-8 card-hover hover:border-cyan-500/50 group overflow-hidden relative">
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                
                {/* Header */}
                <div className="mb-8 relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{platform.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{platform.name}</h3>
                </div>

                {/* Pros section */}
                <div className="mb-8 relative z-10">
                  <h4 className="text-sm font-bold text-cyan-400 uppercase mb-4 flex items-center gap-2">
                    <span className="group-hover:scale-110 transition-transform">✓</span> Kelebihan
                  </h4>
                  <ul className="space-y-3">
                    {platform.pros.map((pro, j) => (
                      <li key={j} className="text-gray-300 text-sm leading-relaxed flex gap-2 group-hover:text-gray-200 transition-colors duration-300">
                        <span className="text-green-400 mt-0.5 group-hover:scale-110 transition-transform duration-300">+</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons section */}
                <div className="pt-6 border-t border-gray-700 relative z-10">
                  <h4 className="text-sm font-bold text-orange-400 uppercase mb-4 flex items-center gap-2">
                    <span className="group-hover:scale-110 transition-transform">⚠</span> Kekurangan
                  </h4>
                  <ul className="space-y-3">
                    {platform.cons.map((con, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-orange-400 mt-0.5 group-hover:scale-110 transition-transform duration-300">-</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
