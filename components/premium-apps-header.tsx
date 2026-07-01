'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export function PremiumAppsHeader() {
  return (
    <header className="relative z-20 bg-black border-b border-cyan-500/10 sticky top-0">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Kembali</span>
        </Link>

        <h1 className="text-lg font-bold text-white">Aplikasi Premium</h1>

        <div className="w-24" /> {/* Spacer for alignment */}
      </div>
    </header>
  )
}
