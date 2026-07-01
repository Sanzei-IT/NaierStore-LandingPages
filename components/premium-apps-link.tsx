'use client'

import Link from 'next/link'
import { ScrollReveal } from './scroll-reveal'

export function PremiumAppsLink() {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/10 border-2 border-pink-500/40 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-pink-500/60 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">📱</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Aplikasi Premium Lainnya?
                </h3>
                <p className="text-gray-300">
                  Kami menyediakan berbagai aplikasi premium populer seperti Netflix, Spotify, ChatGPT Plus, dan masih banyak lagi.
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm md:text-base mb-6">
              Tidak menemukan aplikasi yang Anda cari? Ajukan request dan kami akan membantu Anda mendapatkan akses ke aplikasi premium impian Anda.
            </p>

            <Link
              href="/aplikasi-premium"
              className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50"
            >
              Request Aplikasi Premium →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
