import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Student Portal - Hemvati Nandan Bahuguna Garhwal University",
  description: "Student Portal for Hemvati Nandan Bahuguna Garhwal University",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} bg-[#ececec]`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
