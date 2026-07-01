import type { Metadata } from 'next'
import { PremiumAppsHeader } from '@/components/premium-apps-header'
import { PremiumAppsHero } from '@/components/premium-apps-hero'
import { PremiumAppsFeatures } from '@/components/premium-apps-features'
import { PremiumAppsForm } from '@/components/premium-apps-form'
import { PremiumAppsFooter } from '@/components/premium-apps-footer'

export const metadata: Metadata = {
  title: 'Aplikasi Premium - NaierStore',
  description: 'NaierStore menyediakan berbagai aplikasi premium dengan sistem request. Proses cepat, harga terjangkau, bergaransi, dan pemesanan langsung melalui WhatsApp.',
  keywords: 'aplikasi premium, netflix, spotify, canva, capcut, youtube premium, chatgpt plus',
}

export default function PremiumAppsPage() {
  return (
    <main className="bg-black">
      <PremiumAppsHeader />
      <PremiumAppsHero />
      <PremiumAppsFeatures />
      <PremiumAppsForm />
      <PremiumAppsFooter />
    </main>
  )
}
