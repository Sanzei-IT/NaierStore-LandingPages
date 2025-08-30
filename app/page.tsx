"use client"

import { useState, useEffect } from "react"
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
      icon: "/images/luna-icon.png",
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
      icon: "/images/nebula-icon.png",
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

          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-orbitron)] leading-tight">
              <span className="block text-primary neon-text drop-shadow-2xl">Main Game Konsol</span>
              <span className="block text-secondary neon-text mt-2 md:mt-4 drop-shadow-2xl">Tanpa Konsol</span>
            </h1>
            <div className="flex justify-center mt-6">
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg"></div>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            NaierStore menghadirkan pengalaman Cloud Gaming terbaik. Mainkan game PS, Xbox, dan PC AAA langsung di HP,
            Laptop, atau TV kamu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 glow-effect bg-primary hover:bg-primary/90 font-semibold w-full sm:w-auto"
              onClick={() => scrollToSection("products")}
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              Jelajahi Produk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold bg-transparent w-full sm:w-auto"
              onClick={() => window.open("https://wa.me/6285180674008", "_blank")}
            >
              <Zap className="mr-2 h-5 w-5" />
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* What is Cloud Gaming */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-[family-name:var(--font-orbitron)] text-primary">
              Apa Itu Cloud Gaming?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cloud Gaming adalah teknologi yang memungkinkan kamu bermain game berat (PS5, Xbox, PC AAA) tanpa perlu
              konsol mahal. Semua berjalan di server cloud, kamu hanya butuh internet stabil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl text-primary">Tanpa Ribet Install</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm md:text-base">
                  Langsung main tanpa download atau install game berat
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg md:text-xl text-secondary">Tanpa Antrian</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm md:text-base">
                  Server dedicated untuk pengalaman gaming yang lancar
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg md:text-xl text-accent">Bisa Multiplayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm md:text-base">
                  Main bareng teman dengan koneksi stabil dan ping rendah
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-[family-name:var(--font-orbitron)] text-primary">
              Produk NaierStore
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Pilih paket cloud gaming yang sesuai dengan kebutuhan kamu
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
              >
                <CardHeader>
                  <div
                    className={`w-full h-24 md:h-32 bg-gradient-to-r ${product.color} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                  >
                    <Image
                      src={product.icon || "/placeholder.svg"}
                      alt={`${product.name} Icon`}
                      width={64}
                      height={64}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-orbitron)]">
                    {product.name}
                  </CardTitle>
                  {product.subtitle && (
                    <CardDescription className="text-secondary font-semibold">{product.subtitle}</CardDescription>
                  )}
                  {product.location && (
                    <Badge variant="outline" className="w-fit border-accent text-accent">
                      📍 {product.location}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Fitur:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Harga:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.pricing.map((price, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-3 bg-muted/20 rounded-lg text-sm hover:bg-muted/30 transition-colors"
                        >
                          <span className="text-muted-foreground font-medium">{price.duration}</span>
                          <span className="font-bold text-primary">Rp {price.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-[family-name:var(--font-orbitron)] text-primary">
              Cek Disini untuk Menampilkan Keseluruhan Gamelist
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Akses langsung ke platform gaming untuk melihat koleksi game lengkap
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {gameLinks.map((platform, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-orbitron)]">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {platform.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outline"
                      className="w-full justify-between border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <span className="flex items-center">
                        <Gamepad2 className="mr-2 h-4 w-4" />
                        {link.type}
                      </span>
                      <div className="flex items-center">
                        <span className="text-xs mr-2">{link.label}</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-[family-name:var(--font-orbitron)] text-primary">
              ✨ Perbandingan Platform Cloud Gaming Eksklusif di NaierStore
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-card border-border hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold text-secondary font-[family-name:var(--font-orbitron)]">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Kelebihan:
                    </h4>
                    <ul className="space-y-2">
                      {platform.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-destructive flex items-center">
                      <XCircle className="h-4 w-4 mr-2" />
                      Kekurangan:
                    </h4>
                    <ul className="space-y-2">
                      {platform.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-destructive mr-2">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-accent flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      Game Populer:
                    </h4>
                    <ul className="space-y-2">
                      {platform.games.map((game, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">🎮</span>
                          {game}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-card/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-primary">
                Pricelist Lengkap
              </h2>
              <Sparkles className="h-8 w-8 text-secondary" />
            </div>
            <p className="text-lg text-muted-foreground">Harga terbaik untuk pengalaman gaming premium</p>
          </div>

          <div className="space-y-8">
            {products.map((product, productIndex) => (
              <Card
                key={productIndex}
                className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Image
                        src={product.icon || "/placeholder.svg"}
                        alt={`${product.name} Icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-orbitron)]">
                        {product.name}
                      </CardTitle>
                      {product.subtitle && (
                        <CardDescription className="text-secondary font-medium">{product.subtitle}</CardDescription>
                      )}
                    </div>
                    {product.location && (
                      <Badge variant="outline" className="ml-auto border-accent text-accent hidden sm:flex">
                        📍 {product.location}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
                    {product.pricing.map((price, priceIndex) => (
                      <div
                        key={priceIndex}
                        className="group relative bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg p-4 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 hover:scale-105 border border-border/50 hover:border-primary/30"
                      >
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground font-medium mb-2 group-hover:text-primary/80 transition-colors">
                            {price.duration}
                          </div>
                          <div className="text-lg font-bold text-primary group-hover:text-primary/90 transition-colors">
                            Rp {price.price}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-bold glow-effect"
              onClick={() => window.open("https://wa.me/6285180674008", "_blank")}
            >
              <Zap className="mr-2 h-5 w-5" />
              Pesan Sekarang via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-primary">
                Testimoni
              </h2>
              <Star className="h-8 w-8 text-secondary" />
            </div>
            <p className="text-lg text-muted-foreground">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`Testimonial ${testimonial.name}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary">{testimonial.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">{testimonial.product}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Pelayanan cepat dan akun berkualitas. Sangat puas dengan layanan NaierStore!"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold bg-transparent"
              onClick={() => window.open("https://whatsapp.com/channel/0029Vb2NeLe0bIdvDLh8C01z", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Lihat Testimoni Lainnya
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-[family-name:var(--font-orbitron)] text-primary">
            Metode Pembayaran
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Metode Pembayaran tersedia via E-Wallet (DANA) & QRIS All Transaksi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <Badge
              variant="outline"
              className="text-base md:text-lg px-6 py-3 border-accent text-accent w-full sm:w-auto"
            >
              💳 DANA
            </Badge>
            <Badge
              variant="outline"
              className="text-base md:text-lg px-6 py-3 border-secondary text-secondary w-full sm:w-auto"
            >
              📱 QRIS
            </Badge>
          </div>
        </div>
      </section>

      {/* About Store */}
      <section className="py-16 md:py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-[family-name:var(--font-orbitron)] text-primary">
            Tentang NaierStore
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Kami adalah penyedia layanan Cloud Gaming terpercaya di Indonesia. Dengan server stabil, harga terjangkau,
            dan garansi anti ribet, kami pastikan pengalaman gaming kamu selalu lancar dan eksklusif.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-[family-name:var(--font-orbitron)] text-primary">
            Siap Main Game Favoritmu?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Jangan tunggu lagi! Rasakan pengalaman cloud gaming terbaik bersama NaierStore.
          </p>
          <Button
            size="lg"
            className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 glow-effect bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-bold w-full sm:w-auto"
            onClick={() => window.open("https://wa.me/6285180674008", "_blank")}
          >
            <Gamepad2 className="mr-3 h-6 w-6" />
            Order via WhatsApp Sekarang!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Image
              src="/images/naier-logo.png"
              alt="NaierStore Logo"
              width={80}
              height={80}
              className="mx-auto md:w-[100px] md:h-[100px]"
            />
          </div>
          <p className="text-muted-foreground mb-4">© 2024 NaierStore. Cloud Gaming Terbaik Indonesia.</p>
          <p className="text-sm text-muted-foreground">
            Hubungi kami:{" "}
            <a href="https://wa.me/6285180674008" className="text-primary hover:underline">
              WhatsApp
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
