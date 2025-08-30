"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Zap, Shield, Clock, Star, CheckCircle, XCircle, Crown, Sparkles, ExternalLink, MessageCircle } from 'lucide-react'
import Image from "next/image"

export default function NaierStoreLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const products = [
    {
      name: "Nebula Cloud",
      location: "Premium",
      icon: "/images/nebula-icon.png",
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
      icon: "/images/luna-icon.png",
      features: [
        "Server berkualitas",
        "No antri",
        "Bisa online",
        "Support 4K+120FPS",
        "Tanpa APK (cukup browser)",
        "Free tutorial",
      ],
      pricing: [{ duration: "1 Minggu", price: "48K" }],
      color: "from-purple-500 to-pink-400",
    },
    {
      name: "Xbox Cloud",
      subtitle: "Game Pass Ultimate",
      icon: "/images/xbox-icon.png",
      features: [
        "Nonstop Play 24/7",
        "Online + Multiplayer Local",
        "Akun Anti Terkunci",
        "Tanpa antrian",
        "Bisa main tanpa VPN",
      ],
      pricing: [
        { duration: "1 Hari", price: "12K" },
        { duration: "2 Hari", price: "22K" },
        { duration: "3 Hari", price: "30K" },
        { duration: "7 Hari", price: "68K" },
        { duration: "15 Hari", price: "95K" },
        { duration: "1 Bulan", price: "135K" },
        { duration: "2 Bulan", price: "168K" },
        { duration: "8 Bulan", price: "395K" },
        { duration: "13 Bulan", price: "697K" },
      ],
      color: "from-green-500 to-emerald-400",
    },
  ]

  const platforms = [
    {
      name: "Nebula Cloud",
      pros: [
        "Koleksi game terbanyak di antara semua platform",
        "Mendukung Android, PC/Laptop, Smart TV, dan VR",
        "Cocok untuk gamer yang ingin eksplorasi banyak judul game",
      ],
      cons: ["Tidak mendukung perangkat iOS"],
      games: ["GTA V (dengan mod)", "Red Dead Redemption 2", "The Last of Us Series"],
    },
    {
      name: "Xbox Cloud (Game Pass Ultimate)",
      pros: [
        "Game eksklusif Xbox dan judul AAA dengan kualitas premium",
        "Mendukung Android, iOS, PC, Laptop, MacBook, Smart TV, VR",
        "Semua game dapat dimainkan dalam mode online",
      ],
      cons: ["Beberapa game bersifat eksklusif, sehingga harus dimiliki (owned) untuk dimainkan"],
      games: ["Assassin's Creed Series", "FC 25", "GTA V"],
    },
    {
      name: "Luna Cloud",
      pros: [
        "Mendukung semua perangkat termasuk iOS & Smart TV",
        "Harga lebih terjangkau dibanding Nebula dan Xbox Cloud",
        "Sistem channel memungkinkan memilih paket game sesuai kebutuhan",
      ],
      cons: ["Koleksi game tidak sebanyak Nebula atau Xbox Cloud"],
      games: ["FC 25", "MotoGP 24", "Star Wars Jedi Series"],
    },
  ]

  const gameLinks = [
    {
      name: "Nebula",
      links: [
        {
          type: "Android",
          url: "https://play.google.com/store/apps/details?id=com.nebula.release",
          label: "Play Store",
        },
        { type: "PC", url: "https://nebula.my", label: "nebula.my" },
      ],
    },
    {
      name: "Xbox",
      links: [{ type: "Web", url: "https://www.xbox.com/en-au/play", label: "xbox.com/play" }],
    },
    {
      name: "Luna",
      links: [{ type: "Web", url: "https://luna.amazon.com", label: "luna.amazon.com" }],
    },
  ]

  const testimonials = [
    {
      name: "AMMO",
      product: "NEBULA 1 MONTH",
      image: "/images/testimonial-1.png",
    },
    {
      name: "WARLAN",
      product: "XGPU MONTHS 20 DAY",
      image: "/images/testimonial-2.png",
    },
    {
      name: "AJIYOZ",
      product: "XGPU 1 WEEK",
      image: "/images/testimonial-3.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-chart-3 rounded-full animate-pulse delay-700" />
        </div>

        <div
          className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/images/naier-logo.png"
              alt="NaierStore Logo"
              width={150}
              height={150}
              className="float-effect md:w-[200px] md:h-[200px]"
            />
          </div>


