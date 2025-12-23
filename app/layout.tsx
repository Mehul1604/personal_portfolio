import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav'
import Footer from './footer'
import ScrollToTop from '@/components/Helper/ScrollToTop'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  // metadataBase: new URL('https://nim-fawn.vercel.app/'),
  // alternates: {
  //   canonical: '/'
  // },
  title: {
    default: 'Mehul Mathur Portfolio | Next.JS 15',
    template: '%s | Mehul Mathur Portfolio',
  },
  description:  'Mehul Mathur\'s Portfolio built with Next.js 15, React 19 and Motion-Primitives.',
};

const interFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  variable: '--font-inter-tight',
  // now this variable name can be used 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.variable} antialiased bg-[#0d0d1f]`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >

          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
