import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DevByShat. Youtube Tutorials",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} p-10 antialiased`}>
        <div className="mb-4 border border-white/20 p-2.5">
          <h1 className="mb-2 text-2xl font-medium">Demos:</h1>
          <ul className="ml-1 inline-flex rounded-sm bg-zinc-800/70 px-3 py-1.5 text-sm font-medium">
            <li className="">
              <Link href={"/reusable-button"}>Reusable-button</Link>
            </li>
            {/* <li></li> */}
            {/* <li></li> */}
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}
