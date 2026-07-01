'use client'

import { ScrollReveal } from './scroll-reveal'

export function Features() {
  const features = [
    {
      title: 'Server Stabil & Cepat',
      description: 'Infrastruktur cloud terbaik dengan latency minimal untuk pengalaman gaming tanpa lag',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Support 24/7',
      description: 'Tim customer service siap membantu Anda kapan saja melalui WhatsApp dan chat',
      icon: '🆘',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Multi Platform',
      description: 'Akses di Android, iOS, PC, Laptop, Smart TV dan berbagai device lainnya',
      icon: '📱',
      color: 'from-green-500 to-cyan-500',
    },
    {
      title: 'Harga Transparan',
      description: 'Tidak ada biaya tersembunyi, bayar hanya sesuai paket yang Anda pilih',
      icon: '💰',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Tanpa Hardware Mahal',
      description: 'Mainkan game AAA tanpa perlu membeli PC gaming atau konsol terbaru yang mahal',
      icon: '🎮',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Update Terbaru',
      description: 'Akses game-game terbaru tanpa perlu download atau install dengan ukuran besar',
      icon: '🚀',
      color: 'from-blue-500 to-indigo-500',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 px-4 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-cyan-900/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Kenapa Memilih </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NaierStore?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan solusi cloud gaming terbaik dengan harga paling kompetitif dan layanan premium
          </p>
        </ScrollReveal>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm card-hover hover:border-cyan-500/50 relative overflow-hidden">
                {/* Gradient accent on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${feature.color} pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {feature.description}
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
