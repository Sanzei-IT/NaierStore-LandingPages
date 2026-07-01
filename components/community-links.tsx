'use client'

import { ScrollReveal } from './scroll-reveal'
import { Button } from '@/components/ui/button'

export function CommunityLinks() {
  const links = [
    {
      icon: '💬',
      title: 'Channel Testimoni',
      description: 'Lihat testimoni dari ribuan pengguna NaierStore',
      url: 'https://whatsapp.com/channel/0029Vb2NeLe0bIdvDLh8C01z',
      color: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-500/50',
    },
    {
      icon: '👥',
      title: 'Komunitas WhatsApp',
      description: 'Bergabung dengan komunitas dan tambah teman sesama gamer',
      url: 'https://chat.whatsapp.com/GjzNOYxtj4n5Y0vDxMuzTn?mode=gi_t',
      color: 'from-blue-600 to-cyan-600',
      borderColor: 'border-blue-500/50',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-green-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Bergabung Komunitas Kami
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Dapatkan update, tips, dan terhubung dengan jutaan pengguna NaierStore
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {links.map((link, idx) => (
            <ScrollReveal key={link.title} delay={idx * 0.2} className="flex h-full">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-2xl backdrop-blur-xl transition-all duration-500 group overflow-hidden border-2 bg-gradient-to-br from-gray-900/70 to-gray-900/40 border-gray-700 hover:border-white/30 hover:bg-gray-900/90 flex flex-col p-8 hover:scale-105"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                  style={{ animation: 'shine 4s ease-in-out infinite' }}
                />

                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div className="text-4xl">{link.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {link.title}
                  </h3>
                </div>

                <p className="relative z-10 text-gray-300 text-lg mb-6 flex-1">
                  {link.description}
                </p>

                <div className="relative z-10">
                  <Button className="w-full md:w-auto bg-white text-black hover:bg-white/90 font-bold h-12 px-8 text-base">
                    Bergabung Sekarang →
                  </Button>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
