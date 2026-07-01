'use client'

import { ScrollReveal } from './scroll-reveal'

export function CloudComparison() {
  const cloudComparisons = [
    {
      id: 'nebula',
      name: 'Cloud Nebula',
      color: 'from-fuchsia-600 via-purple-600 to-cyan-500',
      borderColor: 'border-fuchsia-500/60',
      iconColor: 'text-fuchsia-400',
      advantages: [
        'NO ANTRI UNLIMITED WAKTU SESI',
        'KOLEKSI GAME LEBIH BANYAK DAN LEBIH VARIATIF',
        'SETTINGAN GRAFIK DAPAT DI SESUAIKAN PADA IN-GAME',
      ],
      disadvantages: [
        'TIDAK SUPPORT IOS',
      ],
    },
    {
      id: 'xbox',
      name: 'Xbox Cloud',
      color: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-500/60',
      iconColor: 'text-green-400',
      advantages: [
        'NO ANTRI UNLIMITED WAKTU SESI',
        'SEMUA GAME DAPAT DI MAINKAN DALAM "ONLINE MODE" BISA MABAR (GTA V, FC24, FC25 CAREER MODE DLL)',
        'SUPPORT ALL DEVICES DAN PERANGKAT',
      ],
      disadvantages: [
        'TERDAPAT 10% DARI TOTAL GAME YANG WAJIB DI BELI LAGI UNTUK DAPAT DI AKSES',
      ],
    },
    {
      id: 'luna',
      name: 'Cloud Luna+',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-500/60',
      iconColor: 'text-purple-400',
      advantages: [
        'NO ANTRI UNLIMITED WAKTU SESI',
        'SEMUA GAME DAPAT DIMAINKAN DALAM "ONLINE MODE" BISA MABAR (FC25, FC26 CAREER MODE, DLL)',
        'SUPPORT ALL DEVICES',
      ],
      disadvantages: [
        'TOTAL JUDUL GAME YANG TERBATAS',
      ],
    },
  ]

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Kelebihan & Kekurangan
            </span>
            <br />
            <span className="text-white">Setiap Cloud Gaming</span>
          </h2>
          <p className="text-gray-400 text-lg">Perbandingan lengkap untuk membantu Anda memilih</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cloudComparisons.map((cloud, idx) => (
            <ScrollReveal
              key={cloud.id}
              delay={idx * 0.2}
              className="flex h-full"
            >
              <div className={`relative w-full rounded-2xl backdrop-blur-xl border-2 ${cloud.borderColor} bg-gradient-to-br from-gray-900/70 to-gray-900/40 overflow-hidden group hover:border-white/50 transition-all duration-300`}>
                {/* Animated background shimmer */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700" 
                  style={{ animation: 'shine 4s ease-in-out infinite' }} 
                />

                <div className="relative z-10 p-6 md:p-8">
                  {/* Cloud name with icon */}
                  <div className="mb-8">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${cloud.color} bg-clip-text text-transparent`}>
                      {cloud.name}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                  </div>

                  {/* Advantages section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">✅</span>
                      <h4 className="text-lg font-bold text-green-400">Kelebihan</h4>
                    </div>
                    <ul className="space-y-3">
                      {cloud.advantages.map((advantage, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm md:text-base text-white/85 leading-relaxed group/item"
                        >
                          <span className="text-green-400 font-bold flex-shrink-0 mt-1">→</span>
                          <span className="group-hover/item:text-white transition-colors duration-300">
                            {advantage}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disadvantages section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">⚠️</span>
                      <h4 className="text-lg font-bold text-red-400">Kekurangan</h4>
                    </div>
                    <ul className="space-y-3">
                      {cloud.disadvantages.map((disadvantage, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed group/item"
                        >
                          <span className="text-red-400 font-bold flex-shrink-0 mt-1">•</span>
                          <span className="group-hover/item:text-white/85 transition-colors duration-300">
                            {disadvantage}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}
