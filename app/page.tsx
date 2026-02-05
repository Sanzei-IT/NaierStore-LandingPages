import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { Comparison } from '@/components/comparison'
import { FAQ } from '@/components/faq'
import { Payment } from '@/components/payment'
import { FinalCTA } from '@/components/final-cta'

export const metadata = {
  title: 'NaierStore - Cloud Gaming Premium',
  description: 'Cloud Gaming tanpa ribet dengan server stabil, harga transparan, dan performa terbaik. Mainkan game berat tanpa konsol mahal.',
  keywords: 'cloud gaming, gaming streaming, nebula cloud, xbox cloud, luna cloud',
}

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Stats />
      <About />
      <Features />
      <Pricing />
      <Comparison />
      <FAQ />
      <Payment />
      <FinalCTA />
    </main>
  )
}
