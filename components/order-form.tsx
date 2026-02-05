'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollReveal } from './scroll-reveal'
import { MessageCircle } from 'lucide-react'

const CLOUD_PLANS = [
  {
    id: 'xbox',
    name: 'Xbox Cloud',
    color: 'border-green-500/50 bg-green-500/5',
    pricing: [
      { duration: '1 Hari', price: 15000 },
      { duration: '2 Hari', price: 28000 },
      { duration: '3 Hari', price: 35000 },
      { duration: '5 Hari', price: 52000 },
      { duration: '7 Hari', price: 70000 },
      { duration: '15 Hari', price: 115000 },
      { duration: '1 Bulan', price: 168000 },
      { duration: '2 Bulan', price: 218000 },
      { duration: '3 Bulan + 10 Hari', price: 338000 },
      { duration: '5 Bulan', price: 388000 },
      { duration: '6 Bulan', price: 488000 },
      { duration: '7 Bulan', price: 538000 },
      { duration: '9 Bulan', price: 728000 },
      { duration: '11 Bulan', price: 938000 },
    ],
  },
  {
    id: 'nebula',
    name: 'Cloud Nebula',
    color: 'border-fuchsia-500/50 bg-fuchsia-500/5',
    pricing: [
      { duration: '3 Hari', price: 30000 },
      { duration: '7 Hari', price: 65000 },
      { duration: '1 Bulan', price: 150000 },
      { duration: '3 Bulan', price: 400000 },
    ],
  },
  {
    id: 'luna',
    name: 'Cloud Luna+',
    color: 'border-purple-500/50 bg-purple-500/5',
    pricing: [
      { duration: '1 Minggu', price: 48000 },
      { duration: '1 Bulan', price: 138000 },
    ],
  },
]

export function OrderForm() {
  const [selectedCloud, setSelectedCloud] = useState('xbox')
  const [selectedDuration, setSelectedDuration] = useState(0)
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('qris')
  const [isLoading, setIsLoading] = useState(false)

  const currentPlan = CLOUD_PLANS.find((p) => p.id === selectedCloud)
  const currentPrice = currentPlan?.pricing[selectedDuration]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !whatsapp) {
      alert('Mohon lengkapi nama dan nomor WhatsApp')
      return
    }

    setIsLoading(true)

    const message = `*PESANAN CLOUD GAMING*\n\n📱 *Nama:* ${name}\n☁️ *Varian Cloud:* ${currentPlan?.name}\n⏱️ *Durasi:* ${currentPrice?.duration}\n💰 *Harga:* Rp ${currentPrice?.price.toLocaleString('id-ID')}\n💳 *Metode Pembayaran:* ${paymentMethod.toUpperCase()}\n📞 *No. WhatsApp:* ${whatsapp}\n\nDikonfirmasi dari Website Naierstore`

    const adminPhone = '6285122907262'
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${adminPhone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`

    window.open(whatsappUrl, '_blank')
    setIsLoading(false)

    // Reset form
    setName('')
    setWhatsapp('')
    setSelectedDuration(0)
    setPaymentMethod('qris')
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Pesan Sekarang
              </h2>
              <p className="text-white/70 text-base md:text-lg">
                Pilih paket cloud gaming yang sesuai dengan kebutuhan Anda
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Cloud Selection */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-4">
                    1. Pilih Varian Cloud
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {CLOUD_PLANS.map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => {
                          setSelectedCloud(plan.id)
                          setSelectedDuration(0)
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedCloud === plan.id
                            ? `${plan.color} border-current scale-105`
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <p className="font-semibold text-white">{plan.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Selection */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-4">
                    2. Pilih Durasi
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-64 overflow-y-auto pr-2">
                    {currentPlan?.pricing.map((price, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDuration(idx)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 border-2 ${
                          selectedDuration === idx
                            ? 'bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/50'
                            : 'border-white/10 text-white/80 hover:border-white/30'
                        }`}
                      >
                        <div className="font-semibold">{price.duration}</div>
                        <div className="text-xs opacity-75">
                          Rp {price.price.toLocaleString('id-ID')}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 font-medium">Total Harga:</span>
                    <span className="text-2xl font-bold text-cyan-400">
                      Rp {currentPrice?.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    3. Nama Lengkap
                  </label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama lengkap Anda"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>

                {/* WhatsApp Input */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    4. Nomor WhatsApp
                  </label>
                  <div className="flex items-center">
                    <span className="bg-white/10 border border-r-0 border-white/20 rounded-l-lg px-4 py-3 text-white/70">
                      +62
                    </span>
                    <Input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="8xx xxxx xxxx"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-l-none"
                      required
                    />
                  </div>
                  <p className="text-xs text-white/50 mt-2">
                    Tanpa simbol atau spasi (contoh: 81234567890)
                  </p>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-4">
                    5. Metode Pembayaran
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('qris')}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        paymentMethod === 'qris'
                          ? 'bg-blue-500/20 border-blue-400 text-blue-200'
                          : 'border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <p className="font-semibold">QRIS</p>
                      <p className="text-xs opacity-75">E-Wallet & Bank</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('all-payment')}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        paymentMethod === 'all-payment'
                          ? 'bg-purple-500/20 border-purple-400 text-purple-200'
                          : 'border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <p className="font-semibold">All Payment</p>
                      <p className="text-xs opacity-75">Semua Metode</p>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/50"
                >
                  <MessageCircle size={20} />
                  {isLoading ? 'Mengirim...' : 'Kirim ke WhatsApp Admin'}
                </Button>

                <p className="text-xs text-white/50 text-center">
                  Admin akan menghubungi Anda untuk konfirmasi dan proses pembayaran
                </p>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
