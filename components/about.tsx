'use client'

import { ScrollReveal } from './scroll-reveal'
import Image from 'next/image'

export function About() {
  const benefits = [
    {
      title: 'Tanpa Install Game',
      description: 'Mainkan game langsung tanpa harus download atau install',
      icon: '⚡',
    },
    {
      title: 'Bisa di Banyak Device',
      description: 'Akses di smartphone, tablet, laptop, atau TV pintar',
      icon: '📱',
    },
    {
      title: 'Lebih Hemat & Praktis',
      description: 'Bayar hanya untuk yang kamu pakai, tanpa biaya hardware mahal',
      icon: '💰',
    },
  ]

  const platforms = [
    {
      name: 'Xbox Cloud Gaming',
      description: 'Platform cloud gaming dari Microsoft dengan library game terlengkap',
      features: ['100+ Game Tersedia', 'Kompatibel Multi-Device', 'Play Anywhere Benefit'],
      logo: 'https://files.catbox.moe/g9fstp.jpg',
    },
    {
      name: 'Luna',
      description: 'Layanan streaming game dari Amazon dengan teknologi cloud terdepan',
      features: ['Library Game Lengkap', 'Controller Wireless', 'Instant Play'],
      logo: 'https://files.catbox.moe/449h5f.jpg',
    },
    {
      name: 'Nebula Cloud',
      description: 'Platform lokal dengan server stabil khusus untuk gamer Indonesia',
      features: ['Server Lokal Indonesia', 'Latensi Rendah', 'Ping Stabil'],
      logo: 'https://files.catbox.moe/uoaf0n.jpg',
    },
  ]

  return (
    <section id="info" className="relative py-20 md:py-32 px-4 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          {/* NaierStore Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg p-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/30 flex items-center justify-center hover:scale-110 transition-transform duration-500" style={{ animation: 'logo-float-rotate 4s ease-in-out infinite' }}>
              <Image
                src="https://files.catbox.moe/r67a3v.jpg"
                alt="NaierStore Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Apa Itu </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Gaming?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Cloud Gaming memungkinkan kamu memainkan game berat tanpa konsol atau PC mahal.
            Semua game berjalan di server cloud berperforma tinggi, kamu hanya butuh internet stabil.
          </p>
        </ScrollReveal>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {benefits.map((benefit, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.15}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm card-hover hover:border-cyan-500/50">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Platform section */}
        <ScrollReveal className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Platform yang Kami Dukung
          </h3>
          <p className="text-gray-400 text-base md:text-lg">
            Akses berbagai platform gaming terkemuka melalui NaierStore
          </p>
        </ScrollReveal>

        {/* Platform cards - Text-rich content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.15}
              className="flex flex-col"
            >
              <div className="h-full rounded-2xl border-2 border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-md card-hover hover:border-cyan-400 p-6 md:p-8 group overflow-hidden relative transition-all duration-300">
                {/* Gradient shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Platform Logo */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                      <Image
                        src={platform.logo || "/placeholder.svg"}
                        alt={platform.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Platform name */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 text-center">
                    {platform.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                    {platform.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {platform.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* NaierStore Logo at bottom */}
        <ScrollReveal className="mt-20 flex justify-center">
          
        </ScrollReveal>
      </div>
    </section>
  )
}
