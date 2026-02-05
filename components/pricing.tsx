'use client'

import { ScrollReveal } from './scroll-reveal'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Pricing() {
  const plans = [
    {
      id: 'luna',
      name: 'Cloud Luna+',
      subtitle: 'BY NAIERSTORE',
      badge: null,
      icon: '☀️',
      logo: 'https://files.catbox.moe/449h5f.jpg',
      accentColor: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-500/50',
      glowColor: 'shadow-purple-500/30',
      features: [
        'Server berkualitas',
        'No antri',
        'Bisa online',
        'Support 4K + 120 FPS',
        'Tanpa APK, cukup browser',
        'Free tutorial lengkap',
      ],
      pricing: [
        { duration: '1 Minggu', price: '48K' },
        { duration: '1 Bulan', price: '138K' },
      ],
      note: 'Sistem bundling 4 akun mingguan, memungkinkan melanjutkan save FC di akun sebelumnya.',
      highlighted: false,
    },
    {
      id: 'nebula',
      name: 'Cloud Nebula',
      subtitle: 'BY NAIERSTORE',
      badge: 'UPDATE 21 JANUARI 2025',
      icon: '🌌',
      logo: 'https://files.catbox.moe/uoaf0n.jpg',
      accentColor: 'from-fuchsia-600 via-purple-600 to-cyan-500',
      borderColor: 'border-fuchsia-500/60',
      glowColor: 'shadow-fuchsia-500/40',
      features: [
        'Ping kecil & stabil',
        'No antri',
        'Play langsung tanpa beli game',
        'Server PC High Spec',
        'Support hingga 4K + 120 FPS',
      ],
      pricing: [
        { duration: '1 Hari', price: '18K' },
        { duration: '2 Hari', price: '32K' },
        { duration: '3 Hari', price: '42K' },
        { duration: '5 Hari', price: '60K' },
        { duration: '7 Hari', price: '85K' },
        { duration: '14 Hari', price: '150K' },
        { duration: '1 Bulan', price: '195K' },
      ],
      note: 'Jika ada usaha hacking atau perubahan identitas akun, akun ditarik paksa dan uang hangus.',
      highlighted: true,
    },
    {
      id: 'xbox',
      name: 'Xbox Cloud',
      subtitle: 'BY NAIERSTORE',
      badge: 'UPDATE HARGA 29 JANUARI 2026',
      icon: '🎮',
      logo: 'https://files.catbox.moe/g9fstp.jpg',
      accentColor: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-500/50',
      glowColor: 'shadow-green-500/30',
      features: [
        'Nonstop Play 24/7',
        'Support online + multiplayer lokal',
        'Akun anti terkunci',
        'Tanpa antrian',
        'Bisa main tanpa VPN',
        'Tutorial bermain',
      ],
      pricing: [
        { duration: '1 Hari', price: '15K' },
        { duration: '2 Hari', price: '28K' },
        { duration: '3 Hari', price: '35K' },
        { duration: '5 Hari', price: '52K' },
        { duration: '7 Hari', price: '70K' },
        { duration: '15 Hari', price: '115K' },
        { duration: '1 Bulan', price: '168K' },
        { duration: '2 Bulan', price: '218K' },
        { duration: '3 Bulan + 10 Hari', price: '338K' },
        { duration: '5 Bulan', price: '388K' },
        { duration: '6 Bulan', price: '488K' },
        { duration: '7 Bulan', price: '538K' },
        { duration: '9 Bulan', price: '728K' },
        { duration: '11 Bulan', price: '938K' },
      ],
      note: 'Jika terdapat indikasi upaya hacking, akun akan ditarik paksa dan uang hangus.',
      highlighted: false,
    },
  ]

  return (
    <section id="packages" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Paket & Harga
            </span>
            <br />
            <span className="text-white">NaierStore</span>
          </h2>
          <p className="text-gray-400 text-lg">Pilih paket yang sesuai dengan kebutuhan Anda</p>
        </ScrollReveal>

        {/* Pricing cards with enhanced animations */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={plan.id}
              delay={idx * 0.2}
              className="flex h-full"
            >
              <div
                className={`relative w-full rounded-2xl backdrop-blur-xl transition-all duration-500 group overflow-hidden border-2 flex flex-col ${
                  plan.highlighted
                    ? `bg-gradient-to-br ${plan.accentColor} ${plan.borderColor} md:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110`
                    : `bg-gradient-to-br from-gray-900/70 to-gray-900/40 border-gray-700 hover:border-white/30 hover:bg-gray-900/90`
                }`}
                style={{
                  animation: `card-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.15}s forwards`,
                }}
              >
                {/* Animated background shimmer */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700" 
                  style={{ animation: 'shine 4s ease-in-out infinite' }} 
                />
                
                {/* Floating particles animation */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-30"
                    style={{
                      left: `${20 + i * 30}%`,
                      animation: `float 3s ease-in-out ${i * 0.7}s infinite`,
                    }}
                  />
                ))}

                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  {/* Header with logo */}
                  <div className="mb-6 md:mb-8">
                    {/* Logo with enhanced animation */}
                    <div className="mb-4 flex justify-center">
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl p-2 bg-gradient-to-br from-white/20 to-white/5 border-2 border-white/30 flex items-center justify-center group-hover:scale-125 group-hover:border-white/50 transition-all duration-500"
                        style={{ 
                          animation: `logo-float-rotate 4s ease-in-out infinite`,
                          boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)'
                        }}
                      >
                        <Image
                          src={plan.logo || "/placeholder.svg"}
                          alt={plan.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Title and subtitle */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 text-center group-hover:scale-105 transition-transform duration-300">{plan.name}</h3>
                    <p className="text-xs md:text-sm font-semibold text-white/70 text-center mb-3">{plan.subtitle}</p>

                    {/* Badge */}
                    {plan.badge && (
                      <div
                        className="inline-block w-full px-3 py-1.5 text-xs font-bold rounded-lg text-center bg-white/10 backdrop-blur-md border border-white/20 text-white"
                        style={{ animation: 'badge-pulse 2s ease-in-out infinite' }}
                      >
                        {plan.badge}
                      </div>
                    )}
                  </div>

                  {/* Features with stagger animation */}
                  <div className="mb-6 space-y-2 border-t border-white/10 pt-4 flex-1">
                    <h4 className="text-sm font-semibold text-white/80 mb-3">Fitur:</h4>
                    {plan.features.map((feature, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-2 text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-300"
                        style={{ animation: `feature-slide-in 0.5s ease-out ${0.1 * j}s both` }}
                      >
                        <span className="text-cyan-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-white/85 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing table */}
                  <div className="mb-4 space-y-2 border-t border-white/10 pt-4 w-full">
                    <h4 className="text-sm font-semibold text-white/80 mb-2">Harga:</h4>
                    <div className="max-h-48 overflow-y-auto space-y-1.5 pr-2">
                      {plan.pricing.map((price, j) => (
                        <div
                          key={j}
                          className="flex justify-between items-center px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 smooth-transition text-xs md:text-sm border border-white/10 hover:border-white/30"
                        >
                          <span className="text-white font-medium">{price.duration}</span>
                          <span className="font-bold text-cyan-400 text-sm md:text-base">{price.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <p className="text-xs text-white/60 mb-4 italic border-l-2 border-white/20 pl-3 leading-relaxed">
                    {plan.note}
                  </p>

                  {/* CTA Button with animation */}
                  <a
                    href="https://api.whatsapp.com/send/?phone=6285122907262&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className={`w-full btn-neon h-11 md:h-12 font-bold smooth-transition relative overflow-hidden group/btn text-sm md:text-base ${
                        plan.highlighted
                          ? 'bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl'
                          : 'border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50'
                      }`}
                    >
                      <span className="relative z-10">Pesan Sekarang</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500" />
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
