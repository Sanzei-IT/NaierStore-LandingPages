'use client'

import { useState } from 'react'
import { ScrollReveal } from './scroll-reveal'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Apa perbedaan ketiga platform Cloud Gaming?',
      answer: 'Luna fokus pada harga terjangkau dengan UI user-friendly, Nebula menawarkan koleksi game terbanyak dengan ping kecil, sementara Xbox Cloud memberikan akses eksklusif game AAA dengan dukungan multiplayer online penuh.',
    },
    {
      question: 'Apakah semua platform bisa diakses dari smartphone?',
      answer: 'Luna dan Xbox Cloud mendukung iOS dan Android. Nebula hanya mendukung Android, Windows, Smart TV, dan VR. Semua dapat diakses melalui browser web tanpa perlu download aplikasi khusus.',
    },
    {
      question: 'Berapa kecepatan internet minimum yang dibutuhkan?',
      answer: 'Minimum 10 Mbps untuk bermain 1080p 60FPS. Untuk kualitas 4K 120FPS, kami rekomendasikan 30 Mbps atau lebih. Koneksi stabil lebih penting daripada kecepatan tinggi.',
    },
    {
      question: 'Bagaimana jika akun saya di-hack?',
      answer: 'Semua platform memiliki sistem keamanan berlapis. Jika terdeteksi aktivitas mencurigakan, akun akan dibatasi akses. Hubungi support kami segera untuk verifikasi dan pemulihan akun.',
    },
    {
      question: 'Bisakah saya berbagi akun dengan teman?',
      answer: 'Tidak disarankan karena setiap akun memiliki sistem keamanan dan verifikasi perangkat. Sharing akun dapat memicu blokir otomatis sistem. Beli paket terpisah untuk setiap pengguna lebih aman dan nyaman.',
    },
  ]

  return (
    <section id="faq" className="relative py-20 md:py-32 px-4 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-cyan-900/5 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pertanyaan Umum
            </span>
            <br />
            <span className="text-white">Yang Sering Ditanyakan</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Temukan jawaban untuk pertanyaan Anda tentang Cloud Gaming
          </p>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              className="flex"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left"
              >
                <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm card-hover hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden relative">
                  {/* Gradient shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 text-left">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-cyan-500 flex items-center justify-center transition-all duration-300 ${
                        openIndex === i
                          ? 'bg-cyan-500 text-black'
                          : 'text-cyan-500 group-hover:bg-cyan-500/20'
                      }`}
                    >
                      <span className="text-sm font-bold">
                        {openIndex === i ? '−' : '+'}
                      </span>
                    </div>
                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-gray-700'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=6285122907262&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300 hover:scale-105"
          >
            Hubungi Support Kami
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
