'use client'

import { ScrollReveal } from './scroll-reveal'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <section className="relative min-h-96 flex items-center justify-center px-4 py-20 md:py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Siap Main</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tanpa Konsol?
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-12">
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Pilih paket. Kami urus sisanya.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href="https://api.whatsapp.com/send/?phone=6285122907262&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="btn-neon px-8 md:px-12 h-14 md:h-16 text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black rounded-lg neon-glow"
            >
              Order via WhatsApp
              <span className="ml-2">→</span>
            </Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
