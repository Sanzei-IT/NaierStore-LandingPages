'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const bulletsRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [logoRef, titleRef, subtitleRef, bulletsRef, buttonsRef]
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.animation = `fadeInUp 0.6s ease-out ${i * 0.15}s forwards`
        ref.current.style.opacity = '0'
      }
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black px-4 py-20">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-500"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animation: `pulse-glow ${Math.random() * 3 + 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* New Logo with enhanced styling */}
        <div ref={logoRef} className="mb-10 flex justify-center">
          <div className="relative group">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
            
            {/* Logo container */}
            <div className="relative px-2 py-2 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
              <Image
                src="https://files.catbox.moe/r67a3v.jpg"
                alt="NaierStore Logo"
                width={120}
                height={120}
                className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                priority
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.3))',
                }}
              />
            </div>
          </div>
        </div>

        <div ref={titleRef} className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block text-gradient-animate" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
              Cloud Gaming
            </span>
            <br />
            <span className="relative inline-block">
              {/* Glow layer */}
              <span className="absolute inset-0 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text blur-md opacity-50" style={{ animation: 'text-shimmer 6s linear infinite, fadeInUp 0.8s ease-out 0.4s forwards', opacity: 0 }}>
                Tanpa Ribet
              </span>
              {/* Main text */}
              <span 
                className="relative text-transparent bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text" 
                style={{ 
                  animation: 'text-shimmer 6s linear infinite, fadeInUp 0.8s ease-out 0.4s forwards',
                  opacity: 0,
                  '--text-size': '1em'
                }}
              >
                Tanpa Ribet
              </span>
            </span>
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-12">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto backdrop-blur-sm">
            Nikmati pengalaman Cloud Gaming terbaik dengan server stabil, harga transparan, dan dukungan pelanggan 24/7.
          </p>
        </div>

        {/* Trust bullets with enhanced styling */}
        <div ref={bulletsRef} className="mb-16 flex flex-col sm:flex-row justify-center gap-4 text-sm md:text-base flex-wrap px-2">
          {[
            { icon: '⚡', text: 'Server Stabil & Cepat' },
            { icon: '💰', text: 'Harga Jelas & Transparan' },
            { icon: '🎯', text: 'Support 24/7' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md hover:border-cyan-400/70 hover:bg-cyan-500/15 smooth-transition group"
              style={{
                animation: `slideInLeft 0.6s ease-out ${0.3 + i * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
              <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Quick Navigation Menu */}
        <div className="mb-8 flex flex-wrap justify-center gap-3 px-2" style={{
            animation: `fadeInUp 0.6s ease-out 0.6s forwards`,
            opacity: 0,
          }}>
          {[
            { label: 'Info', href: '#info', icon: 'ℹ️' },
            { label: 'Harga', href: '#packages', icon: '💰' },
            { label: 'Perbandingan', href: '#comparison', icon: '⚖️' },
            { label: 'FAQ', href: '#faq', icon: '❓' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="group">
              <button className="px-4 py-2 rounded-lg border-2 border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white font-medium text-sm md:text-base transition-all duration-300 hover:border-cyan-400/70 hover:scale-105">
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            </a>
          ))}
        </div>

        {/* Premium CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-5 justify-center px-2"
          style={{
            animation: `fadeInUp 0.6s ease-out 0.9s forwards`,
            opacity: 0,
          }}
        >
          <a href="#packages" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold text-base md:text-lg h-13 md:h-14 rounded-xl shadow-lg hover:shadow-cyan-500/40 smooth-transition"
            >
              <span className="relative z-10">Lihat Paket & Harga</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ animation: 'shine 3s infinite' }} />
            </Button>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=6285122907262&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full group relative border-2 border-cyan-400/60 text-cyan-300 hover:text-white hover:border-cyan-300 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 font-bold text-base md:text-lg h-13 md:h-14 rounded-xl smooth-transition"
            >
              <span className="relative z-10 flex items-center gap-2">
                💬 Order via WhatsApp
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
