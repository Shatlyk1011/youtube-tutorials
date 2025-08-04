import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevByShat. Youtube Tutorials",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased p-10`}
      >
        <div className="mb-4 border p-2.5 border-white/20">
          <h1 className="font-medium text-2xl mb-2">Demos:</h1>
          <ul className=" ml-1 inline-flex bg-zinc-800/70 px-3 py-1.5 text-sm font-medium rounded-sm">
            <li className="">
              <Link href={'/reusable-button'}>Reusable-button</Link>
            </li>
            {/* <li></li> */}
            {/* <li></li> */}
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
