import { ProgressBar } from "@/components/ProgressBar"
import { Footer, Header } from "@/components/layout"
import { Navbar } from "@/components/navbar"
import { Menu } from "@/components/navbar/Menu"
import { EffectorNext } from "@effector/next"
import clsx from "clsx"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { Inter, Lexend_Exa } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const lexendExa = Lexend_Exa({
  variable: "--font-lexend-exa",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BM Transco",
  icons: {
    icon: "/favicon.ico",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BM Transco",
              url: "https://www.bmtransco.com/",
              logo: "https://www.bmtransco.com/images/logo.png",
              email: "Dispatch@bmtransco.com",
              telephone: "+1 872-245-5555",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1520 Rock Run Dr Suite 4H",
                addressLocality: "Crest Hill",
                addressRegion: "IL",
                postalCode: "60403",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.linkedin.com/company/bmtransco/",
                "https://www.instagram.com/bmtransco",
                "https://wa.me/18722455555",
                "https://t.me/bmtransco",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1 872-245-5555",
                  contactType: "customer service",
                  email: "Dispatch@bmtransco.com",
                  areaServed: "US",
                  availableLanguage: "English",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={clsx(
          "antialiased min-h-screen flex flex-col",
          inter.variable,
          lexendExa.variable
        )}
        cz-shortcut-listen="true"
      >
        <ProgressBar />
        <NextIntlClientProvider locale={"en"}>
          <EffectorNext>
            <Menu />
            <Header />
            <Navbar />
            {children}

            <Footer />
          </EffectorNext>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
