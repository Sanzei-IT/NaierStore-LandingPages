import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "NaierStore - Cloud Gaming Terbaik Indonesia",
  description:
    "Main game konsol tanpa konsol! NaierStore menghadirkan pengalaman Cloud Gaming terbaik dengan server stabil dan harga terjangkau.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="dark">
      <body className={`font-sans ${inter.variable} ${orbitron.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
