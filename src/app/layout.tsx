import { Metadata } from 'next'
import {
  baseDomain,
  blogDesc,
  blogName,
  blogThumbnailURL,
} from '@/config/constant'
import '@/config/globals.css'
// import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'
import { ThemeProvider } from '@/layouts/theme/Provider'
import { getLanguageFromCookie } from '@/utils/cookies'
import { Toaster } from '@/components/ui/toaster'
import 'material-icons/iconfont/material-icons.css'

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = getLanguageFromCookie()

  return (
    <html
      lang={lang}
      className="h-full scroll-my-20 scroll-smooth"
      suppressHydrationWarning
    >
      <body className="font-pretendard flex min-h-screen flex-col">
        <ThemeProvider>
          <Header />
          <main className="mt-[64px] flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
        {/* <GoogleAnalytics gaId="G-TRBVGE9TYP" />
        <GoogleTagManager gtmId="G-TRBVGE9TYP" /> */}
      </body>
    </html>
  )
}
