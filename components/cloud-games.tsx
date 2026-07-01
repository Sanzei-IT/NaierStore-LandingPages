'use client'

import { ScrollReveal } from './scroll-reveal'

interface GameLink {
  label: string
  url: string
  type: 'web' | 'apk'
}

interface CloudGame {
  name: string
  links: GameLink[]
  note?: string
}

const cloudGames: CloudGame[] = [
  {
    name: 'Xbox Cloud',
    links: [
      {
        label: 'Website',
        url: 'https://www.xbox.com/en-au/play',
        type: 'web',
      },
      {
        label: 'APK (Android)',
        url: 'https://better-xcloud.github.io/android/',
        type: 'apk',
      },
    ],
  },
  {
    name: 'Cloud Nebula',
    links: [
      {
        label: 'Website',
        url: 'https://nebula.my',
        type: 'web',
      },
      {
        label: 'APK (Android)',
        url: 'https://play.google.com/store/apps/details?id=com.nebula.release',
        type: 'apk',
      },
    ],
    note: 'Windows version juga tersedia di website',
  },
  {
    name: 'Luna Cloud',
    links: [
      {
        label: 'Website (VPN German)',
        url: 'https://luna.amazon.de',
        type: 'web',
      },
      {
        label: 'APK (Android)',
        url: 'https://sfile.co/zSD4ZPT5hSP',
        type: 'apk',
      },
    ],
    note: 'Wajib gunakan VPN server German untuk cek list game',
  },
]

export function CloudGames() {
  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-slate-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Akses Game
            </span>
            <br />
            <span className="text-white">di Berbagai Cloud Platform</span>
          </h2>
          <p className="text-gray-400 text-lg">Pilih link website atau APK sesuai preferensi Anda</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cloudGames.map((cloud, idx) => (
            <ScrollReveal key={cloud.name} delay={idx * 0.2} className="flex h-full">
              <div className="relative w-full rounded-2xl backdrop-blur-xl transition-all duration-500 group overflow-hidden border-2 bg-gradient-to-br from-gray-900/70 to-gray-900/40 border-cyan-500/30 hover:border-cyan-400/60 hover:bg-gray-900/90 flex flex-col p-6 md:p-8">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                  style={{ animation: 'shine 4s ease-in-out infinite' }}
                />

                <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-6 text-center">
                  {cloud.name}
                </h3>

                <div className="relative z-10 space-y-3 flex-1 mb-4">
                  {cloud.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 hover:border-cyan-300/60 hover:bg-cyan-500/20 transition-all duration-300 group/link"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">
                          {link.type === 'web' ? '🌐' : '📱'}
                        </span>
                        <span className="text-white font-semibold text-sm md:text-base">
                          {link.label}
                        </span>
                      </div>
                      <span className="text-cyan-400 text-lg group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  ))}
                </div>

                {cloud.note && (
                  <p className="relative z-10 text-xs text-white/60 italic border-l-2 border-cyan-400/30 pl-3">
                    {cloud.note}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
