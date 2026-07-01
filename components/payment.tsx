'use client'

import { ScrollReveal } from './scroll-reveal'

export function Payment() {
  const methods = [
    { name: 'DANA', color: 'from-blue-500 to-blue-600' },
    { name: 'QRIS', color: 'from-purple-500 to-pink-600' },
  ]

  return (
    <section className="relative py-16 md:py-20 px-4 bg-gradient-to-b from-slate-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Metode Pembayaran
          </h3>
          <p className="text-gray-400 text-lg mb-10">
            Pembayaran tersedia melalui <span className="text-cyan-400 font-semibold">DANA & QRIS</span> (All Payment)
          </p>

          {/* Payment methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {methods.map((method, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="flex-1 max-w-xs">
                <div className={`p-6 rounded-xl border-2 border-gray-800 bg-gradient-to-br ${method.color} bg-opacity-5 backdrop-blur-sm card-hover hover:border-gray-600`}>
                  <div className="text-3xl font-bold text-white mb-2">{method.name}</div>
                  <p className="text-gray-400 text-sm">Tersedia untuk semua pengguna</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
