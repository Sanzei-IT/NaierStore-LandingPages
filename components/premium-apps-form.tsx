'use client'

import { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '6285122907262'

export function PremiumAppsForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    aplikasi: '',
    catatan: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validasi
    if (!formData.nama.trim()) {
      alert('Mohon lengkapi Nama')
      return
    }
    if (!formData.whatsapp.trim()) {
      alert('Mohon lengkapi Nomor WhatsApp')
      return
    }
    if (!formData.aplikasi.trim()) {
      alert('Mohon lengkapi Nama Aplikasi Premium')
      return
    }

    setIsLoading(true)

    // Format pesan WhatsApp
    const message = `Halo NaierStore 👋

Saya ingin memesan aplikasi premium.

Nama : ${formData.nama}

Nomor : ${formData.whatsapp}

Aplikasi :
${formData.aplikasi}

Catatan :
${formData.catatan || 'Tidak ada catatan'}

Mohon informasi harga dan prosesnya ya. Terima kasih.`

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    // Buka WhatsApp
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormData({
      nama: '',
      whatsapp: '',
      aplikasi: '',
      catatan: '',
    })

    setIsLoading(false)
  }

  return (
    <section
      id="premium-apps-form"
      ref={containerRef}
      className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Request Aplikasi Premium
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Belum menemukan aplikasi yang dicari? Cukup isi nama aplikasi yang ingin dipesan, lalu kirim melalui WhatsApp. Tim NaierStore akan memberikan informasi harga dan ketersediaannya.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Nama
            </label>
            <Input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Nomor WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Nomor WhatsApp
            </label>
            <Input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="Masukkan nomor WhatsApp (contoh: 628123456789)"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Nama Aplikasi Premium */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Nama Aplikasi Premium
            </label>
            <Input
              type="text"
              name="aplikasi"
              value={formData.aplikasi}
              onChange={handleInputChange}
              placeholder="Contoh: Netflix, Spotify, Canva, CapCut, YouTube Premium, ChatGPT Plus, dll."
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Catatan (Opsional) */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Catatan (Opsional)
            </label>
            <textarea
              name="catatan"
              value={formData.catatan}
              onChange={handleInputChange}
              placeholder="Tambahkan catatan jika diperlukan..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            {isLoading ? 'Mengirim...' : 'Kirim ke WhatsApp'}
          </button>
        </form>
      </div>
    </section>
  )
}
