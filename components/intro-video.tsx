'use client'

import { useEffect, useRef, useState } from 'react'

export function IntroVideo() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Attempt to play video when visible
          if (videoRef.current) {
            videoRef.current.play().catch((err) => {
              console.log('[v0] Video autoplay prevented:', err)
            })
          }
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Memperkenalkan NaierStore
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Rasakan pengalaman cloud gaming premium dengan teknologi terdepan dan layanan terbaik dari NaierStore
          </p>
        </div>

        {/* Video Container */}
        <div className={`relative group transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Glow border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500 -z-10" />
          
          {/* Video wrapper */}
          <div className="relative bg-black rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-500/60 transition-colors duration-300">
            <video
              ref={videoRef}
              className="w-full h-auto aspect-video object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%230a0a0a' width='1200' height='675'/%3E%3C/svg%3E"
              preload="auto"
              crossOrigin="anonymous"
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/introduction%20product%20naier%20store-eM8E1fKtpXrgpPWJOa52zBBiNz6Oke.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay gradient on load */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
          </div>


        </div>

        {/* Features highlight below video */}
        <div className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { icon: '⚡', label: 'Server Berkualitas', desc: 'Performa maksimal', colors: 'from-green-500/20 to-emerald-500/10 border-green-500/50 hover:border-green-500/80 hover:shadow-green-500/20' },
            { icon: '🎮', label: 'No Antri', desc: 'Akses instan', colors: 'from-purple-500/20 to-pink-500/10 border-purple-500/50 hover:border-purple-500/80 hover:shadow-purple-500/20' },
            { icon: '🌐', label: 'Browser Only', desc: 'Tanpa APK', colors: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/50 hover:border-cyan-500/80 hover:shadow-cyan-500/20' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`group/item relative p-4 sm:p-6 bg-gradient-to-br ${feature.colors} rounded-xl transition-all duration-300 hover:shadow-lg border`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl sm:text-3xl flex-shrink-0 mt-1">{feature.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-sm sm:text-base">{feature.label}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 group-hover/item:text-gray-100 transition-colors">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
