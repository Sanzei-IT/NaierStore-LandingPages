"use client";

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Gamepad2,
  Zap,
  Shield,
  Clock,
  Star,
  CheckCircle,
  XCircle,
  Crown,
  Sparkles,
  ExternalLink,
  MessageCircle,
} from "lucide-react"

/* ===================== IMAGE FALLBACK ===================== */
function ImgWithFallback({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className,
}: {
  src: string
  fallbackSrc?: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  const [imgSrc, setImgSrc] = useState(src)
  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => fallbackSrc && setImgSrc(fallbackSrc)}
    />
  )
}

/* ===================== MAIN PAGE ===================== */
export default function NaierStoreLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const WA_NUMBER = "6285122907262"
  const openWA = () => window.open(`https://wa.me/${WA_NUMBER}`, "_blank")

  /* ===================== PRODUCTS ===================== */
  const products = [
    {
      name: "Nebula Cloud",
      location: "Premium",
      icon: "/images/nebula.png",
      features: [
        "Ping kecil & stabil",
        "No antri",
        "PC High Spec",
        "Support 4K+120FPS",
        "Play langsung tanpa beli game",
      ],
      pricing: [
        { duration: "1 Hari", price: "18K" },
        { duration: "2 Hari", price: "32K" },
        { duration: "3 Hari", price: "42K" },
        { duration: "5 Hari", price: "60K" },
        { duration: "7 Hari", price: "85K" },
        { duration: "14 Hari", price: "150K" },
        { duration: "1 Bulan", price: "195K" },
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Luna+ Cloud",
      location: "Premium",
      icon: "/images/luna.jpg",
      iconFallback: "/images/luna-icon.png",
      features: [
        "Server berkualitas",
        "No antri",
        "Bisa online",
        "Support 4K+120FPS",
        "Tanpa APK (cukup browser)",
        "Free tutorial",
      ],
      pricing: [
        { duration: "1 Minggu", price: "48K" },
        { duration: "1 Bulan (Bundling 4 akun)", price: "138K" },
      ],
      color: "from-purple-500 to-pink-400",
    },
    {
      name: "Xbox Cloud",
      subtitle: "Game Pass Ultimate",
      icon: "/images/xbox-icon.png",
      pricing: [
        { duration: "1 Hari", price: "12K" },
        { duration: "2 Hari", price: "22K" },
        { duration: "3 Hari", price: "30K" },
        { duration: "7 Hari", price: "68K" },
        { duration: "15 Hari", price: "95K" },
        { duration: "1 Bulan", price: "158K" },
        { duration: "2 Bulan", price: "192K" },
        { duration: "3 Bulan + 10 Hari", price: "299K" },
        { duration: "5 Bulan", price: "378K" },
        { duration: "6 Bulan", price: "478K" },
        { duration: "7 Bulan", price: "525K" },
        { duration: "9 Bulan", price: "712K" },
        { duration: "11 Bulan", price: "899K" },
      ],
      color: "from-green-500 to-emerald-400",
    },
  ]

  /* ===================== TESTIMONIAL ===================== */
  const testimonials = [
    { name: "AMMO", product: "NEBULA 1 MONTH", image: "/images/testimonial-1.png" },
    { name: "WARLAN", product: "XGPU MONTHS 20 DAY", image: "/images/testimonial-2.png" },
    { name: "AJIYOZ", product: "XGPU 1 WEEK", image: "/images/testimonial-3.png" },
  ]

  /* ===================== RENDER ===================== */
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Image src="/images/naier-logo.png" alt="NaierStore" width={180} height={180} className="mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-primary mb-4">NaierStore</h1>
          <p className="text-muted-foreground mb-8">Cloud Gaming Terbaik Tanpa Konsol</p>
          <Button onClick={() => scrollToSection("products")}>
            <Gamepad2 className="mr-2" /> Lihat Produk
          </Button>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Card key={i}>
              <CardHeader>
                <ImgWithFallback src={p.icon} fallbackSrc={p.iconFallback} alt={p.name} width={64} height={64} />
                <CardTitle>{p.name}</CardTitle>
                {p.subtitle && <CardDescription>{p.subtitle}</CardDescription>}
                {p.location && <Badge>{p.location}</Badge>}
              </CardHeader>
              <CardContent className="space-y-3">
                {p.pricing.map((h, x) => (
                  <div key={x} className="flex justify-between">
                    <span>{h.duration}</span>
                    <b>Rp {h.price}</b>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © 2024 NaierStore ·
        <button onClick={openWA} className="text-primary ml-1 underline">
          WhatsApp
        </button>
      </footer>
    </div>
  )
}
